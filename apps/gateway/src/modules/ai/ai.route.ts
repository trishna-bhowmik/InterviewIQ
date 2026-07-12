import { Router } from "express";
import { AIController } from "./ai.controller.js";

const router = Router();

const controller = new AIController();

router.post("/analyze", controller.analyze);

router.post(
  "/interview",
  controller.interview
);

export default router;