import { AnswerRepository } from "./answer.repository.js";
import { AIService } from "../ai/ai.service.js";
import { InterviewRepository } from "../interview/interview.repository.js";

export class AnswerService {
  private repository = new AnswerRepository();
  private aiService = new AIService();
  private interviewRepository = new InterviewRepository();

  async submitAnswer(
  interviewId: string,
  question: string,
  answer: string
) {
  // Evaluate answer
  const evaluation = await this.aiService.evaluateAnswer(
    question,
    answer
  );

  // Save answer
  const savedAnswer = await this.repository.create({
    interviewId,
    question,
    answer,
    score: evaluation.score,
    feedback: evaluation.feedback,
  });

  // TODO: Interview completion logic will go here

  const interview =
  await this.interviewRepository.findById(
    interviewId
  );

if (!interview) {
  throw new Error("Interview not found");
}

const questions = interview.questions as Record<
  string,
  string[]
>;

const totalQuestions = Object.values(questions)
  .flat()
  .length;

const answeredQuestions =
  await this.repository.countByInterview(
    interviewId
  );

//   console.log({
//   totalQuestions,
//   answeredQuestions,
// });

if (answeredQuestions === totalQuestions) {
  const averageScore =
    await this.repository.getAverageScore(
      interviewId
    );

  const allAnswers =
    await this.repository.findByInterview(
      interviewId
    );

  const feedback =
    await this.aiService.generateInterviewFeedback(
      Object.values(questions).flat(),
      allAnswers.map((a) => a.answer)
    );

  await this.interviewRepository.updateResult(
    interviewId,
    averageScore,
    JSON.stringify(feedback)
  );
}


  return {
    answer: savedAnswer,
    evaluation,
  };
}

  async getInterviewAnswers(interviewId: string) {
    return this.repository.findByInterview(interviewId);
  }

  async deleteAnswer(id: string) {
    return this.repository.delete(id);
  }
}