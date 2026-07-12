import { GeminiProvider } from "./gemini.provider.js";
import { ResumeAnalysis } from "./schemas/resume-analysis.schema.js";

export class AIService {
  private provider = new GeminiProvider();

  async analyzeResume(text: string) {
    return this.provider.analyzeResume(text);
  }

  async generateInterviewQuestions(
    analysis: ResumeAnalysis
  ) {
    return this.provider.generateInterviewQuestions(
      analysis
    );
  }

  async evaluateAnswer(
    question: string,
    answer: string
  ) {
    return this.provider.evaluateAnswer(
      question,
      answer
    );
  }

  async generateInterviewFeedback(
  questions: string[],
  answers: string[]
) {
  return this.provider.generateInterviewFeedback(
    questions,
    answers
  );
}
}