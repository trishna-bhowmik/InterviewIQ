import { Response } from "express";
import { AuthRequest } from "../../common/middleware/auth.middleware.js";
import { ProfileService } from "./profile.service.js";

const service = new ProfileService();

export class ProfileController {
  async getProfile(
    req: AuthRequest,
    res: Response
  ) {
    const profile =
      await service.getProfile(
        req.user!.userId
      );

    res.status(200).json({
      success: true,
      data: profile,
    });
  }
}