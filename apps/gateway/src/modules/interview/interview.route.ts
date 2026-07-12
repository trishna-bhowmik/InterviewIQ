import { Router } from "express";
import { InterviewController } from "./interview.controller.js";
import { authenticate } from "../../common/middleware/auth.middleware.js";
import { validate } from "../../common/middleware/validate.middleware.js";
import { createInterviewSchema } from "./interview.schema.js";

const router = Router();
const controller = new InterviewController();

router.post(
  "/",
  authenticate,
  (req, _res, next) => {
    //console.log("BODY:", req.body);
    next();
  },
  validate(createInterviewSchema),
  controller.create
);

router.get(
  "/",
  authenticate,
  controller.getMyInterviews
);

router.get(
  "/:id",
  authenticate,
  controller.getById
);

router.delete(
  "/:id",
  authenticate,
  controller.delete
);

export default router;