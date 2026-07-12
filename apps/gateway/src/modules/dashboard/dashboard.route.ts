import { Router } from "express";
import { DashboardController } from "./dashboard.controller.js";
import { authenticate } from "../../common/middleware/auth.middleware.js";

const router = Router();
const controller =
  new DashboardController();

router.get(
  "/",
  authenticate,
  controller.getDashboard
);

export default router;