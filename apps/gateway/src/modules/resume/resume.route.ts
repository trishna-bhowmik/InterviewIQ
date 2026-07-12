import { Router } from "express";
import { ResumeController } from "./resume.controller.js";
import { authenticate } from "../../common/middleware/auth.middleware.js";
import { uploadResume } from "../../common/middleware/upload.middleware.js";

const router = Router();

const controller = new ResumeController();

router.post(
  "/upload",
  authenticate,
  uploadResume.single("resume"),
  controller.upload
);

router.get(
  "/my",
  authenticate,
  controller.getMyResumes
);

router.delete(
  "/:id",
  authenticate,
  controller.delete
);

export default router;