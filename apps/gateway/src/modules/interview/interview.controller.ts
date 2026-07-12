import { Response } from "express";
import {
  Difficulty,
  InterviewType,
} from "../../generated/prisma/client.js";
import { AuthRequest } from "../../common/middleware/auth.middleware.js";
import { InterviewService } from "./interview.service.js";

const service = new InterviewService();

export class InterviewController {
  async create(req: AuthRequest, res: Response) {
    const userId = req.user!.userId;

    const {
      resumeId,
      title,
      description,
      type,
      difficulty,
      duration,
    } = req.body;

    console.log(req.body);

    const interview = await service.createInterview(
      userId,
      resumeId,
      title,
      description ?? "",
      type as InterviewType,
      difficulty as Difficulty,
      duration
    );

    res.status(201).json({
      success: true,
      data: interview,
    });
  }

  async getById(req: AuthRequest, res: Response) {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid interview id",
      });
    }

    const interview = await service.getInterviewById(id);

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    res.status(200).json({
      success: true,
      data: interview,
    });
  }

  async getMyInterviews(
    req: AuthRequest,
    res: Response
  ) {
    const interviews = await service.getUserInterviews(
      req.user!.userId
    );

    res.status(200).json({
      success: true,
      data: interviews,
    });
  }

  async delete(req: AuthRequest, res: Response) {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid interview id",
      });
    }

    await service.deleteInterview(id);

    res.status(200).json({
      success: true,
      message: "Interview deleted successfully",
    });
  }
}