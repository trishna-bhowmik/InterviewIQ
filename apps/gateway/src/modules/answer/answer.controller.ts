import { Request, Response } from "express";
import { AnswerService } from "./answer.service.js";

const service = new AnswerService();

export class AnswerController {
  async submit(req: Request, res: Response) {
    const {
      interviewId,
      question,
      answer,
    } = req.body;

    const result = await service.submitAnswer(
      interviewId,
      question,
      answer
    );

    res.status(201).json({
      success: true,
      data: result,
    });
  }

  async getByInterview(
    req: Request,
    res: Response
  ) {
    const interviewId = req.params.interviewId;

    if (!interviewId || Array.isArray(interviewId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid interview id",
      });
    }

    const answers =
      await service.getInterviewAnswers(
        interviewId
      );

    res.status(200).json({
      success: true,
      data: answers,
    });
  }

  async delete(
    req: Request,
    res: Response
  ) {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid answer id",
      });
    }

    await service.deleteAnswer(id);

    res.status(200).json({
      success: true,
      message: "Answer deleted successfully",
    });
  }
}