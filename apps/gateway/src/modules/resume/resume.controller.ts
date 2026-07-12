import { Response } from "express";
import { AuthRequest } from "../../common/middleware/auth.middleware.js";
import { ApiError } from "../../common/errors/api-error.js";
import { ResumeService } from "./resume.service.js";

const service = new ResumeService();

export class ResumeController {
  async upload(req: AuthRequest, res: Response) {
    if (!req.file) {
      throw new ApiError(400, "Resume file is required.");
    }

    const result = await service.uploadResume({
      userId: req.user!.userId,
      originalName: req.file.originalname,
      filename: req.file.filename,
      mimeType: req.file.mimetype,
      size: req.file.size,
      path: req.file.path,
    });

    res.status(201).json({
      success: true,
      data: result,
    });
  }

  async getMyResumes(req: AuthRequest, res: Response) {
    const resumes = await service.getUserResumes(
      req.user!.userId
    );

    res.json({
      success: true,
      data: resumes,
    });
  }

  async delete(
  req: AuthRequest,
  res: Response
) {
  const id = req.params.id;

  if (!id || Array.isArray(id)) {
    throw new ApiError(
      400,
      "Invalid resume id."
    );
  }

  await service.deleteResume(
    id,
    req.user!.userId
  );

  res.status(200).json({
    success: true,
    message: "Resume deleted successfully.",
  });
}
}