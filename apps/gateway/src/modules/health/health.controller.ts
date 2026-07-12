import { Request, Response } from "express";
import { healthService } from "./health.service.js";

export class HealthController {
  getHealth(_req: Request, res: Response) {
    const data = healthService.getHealth();

    res.status(200).json(data);
  }
}

export const healthController = new HealthController();