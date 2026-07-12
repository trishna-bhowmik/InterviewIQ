import { Router } from "express";
import { AnswerController } from "./answer.controller.js";
import { authenticate } from "../../common/middleware/auth.middleware.js";
import { validate } from "../../common/middleware/validate.middleware.js";
import { submitAnswerSchema } from "./answer.schema.js";

const router = Router();
const controller = new AnswerController();

router.post(
  "/",
  authenticate,
  validate(submitAnswerSchema),
  controller.submit
);

router.get(
  "/:interviewId",
  authenticate,
  controller.getByInterview
);

router.delete(
  "/:id",
  authenticate,
  controller.delete
);

export default router;