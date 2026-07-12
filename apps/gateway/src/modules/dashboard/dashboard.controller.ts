import { Response } from "express";
import { AuthRequest } from "../../common/middleware/auth.middleware.js";
import { DashboardService } from "./dashboard.service.js";

const service = new DashboardService();

export class DashboardController {
  async getDashboard(
    req: AuthRequest,
    res: Response
  ) {
    const dashboard =
      await service.getDashboard(
        req.user!.userId
      );

    res.json({
      success: true,
      data: dashboard,
    });
  }
}