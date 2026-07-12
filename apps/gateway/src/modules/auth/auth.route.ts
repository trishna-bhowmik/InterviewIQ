import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import { validate } from "../../common/middleware/validate.middleware.js";
import { registerSchema } from "./auth.schema.js";
import { loginSchema } from "./auth.schema.js";
import { authenticate } from "../../common/middleware/auth.middleware.js";

const router = Router();

const controller = new AuthController();

router.post(
  "/register",
  validate(registerSchema),
  controller.register
);

router.post(
  "/login",
  validate(loginSchema),
  controller.login
);

router.post(
  "/refresh",
  controller.refresh
);

router.post(
  "/logout",
  controller.logout
);

router.get(
  "/me",
  authenticate,
  controller.me
);

export default router;