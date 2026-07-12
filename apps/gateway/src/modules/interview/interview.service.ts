import {
  Prisma,
  InterviewType,
  Difficulty,
} from "../../generated/prisma/client.js";
import { InterviewRepository } from "./interview.repository.js";
import { AIService } from "../ai/ai.service.js";
import { ResumeRepository } from "../resume/resume.repository.js";

export class InterviewService {
  private repository = new InterviewRepository();
  private aiService = new AIService();
  private resumeRepository = new ResumeRepository();

  async createInterview(
    userId: string,
    resumeId: string,
    title: string,
    description: string,
    type: InterviewType,
    difficulty: Difficulty,
    duration: number
  ) {
    // Fetch resume
    const resume = await this.resumeRepository.getResumeById(resumeId);

    if (!resume) {
      throw new Error("Resume not found");
    }

    if (!resume.extractedText) {
      throw new Error("Resume text not extracted");
    }

    // Analyze resume
    const analysis = await this.aiService.analyzeResume(
      resume.extractedText
    );

    // Generate interview questions
    const questions =
      await this.aiService.generateInterviewQuestions(
        analysis
      );

    // Save interview
    return this.repository.create({
      userId,
      resumeId,
      title,
      description,
      type,
      difficulty,
      duration,
      questions: questions as Prisma.InputJsonValue,
    });
  }

  async getInterviewById(id: string) {
    return this.repository.findById(id);
  }

  async getUserInterviews(userId: string) {
    return this.repository.findByUser(userId);
  }

  async deleteInterview(id: string) {
    return this.repository.delete(id);
  }

  async updateInterviewStatus(
    id: string,
    status:
      | "SCHEDULED"
      | "IN_PROGRESS"
      | "COMPLETED"
      | "CANCELLED"
  ) {
    return this.repository.updateStatus(id, status);
  }

  async updateInterviewResult(
    id: string,
    score: number,
    feedback: string
  ) {
    return this.repository.updateResult(
      id,
      score,
      feedback
    );
  }
}