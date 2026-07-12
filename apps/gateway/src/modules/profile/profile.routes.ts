import { Router } from "express";
import { ProfileController } from "./profile.controller.js";
import { authenticate } from "../../common/middleware/auth.middleware.js";

const router = Router();

const controller = new ProfileController();

router.get(
  "/",
  authenticate,
  controller.getProfile
);

export default router;