import { Request, Response } from "express";
import { AIService } from "./ai.service.js";

const service = new AIService();

export class AIController {
  async analyze(req: Request, res: Response) {
    const { text } = req.body;

    const result = await service.analyzeResume(text);

    res.json({
      success: true,
      data: result,
    });
  }

  async interview(req: Request, res: Response) {

  const questions = await service.generateInterviewQuestions(
    req.body.analysis
  );

  res.json({
    success: true,
    data: questions,
  });
}
}