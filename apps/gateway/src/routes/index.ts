import { Router } from "express";

import healthRouter from "../modules/health/index.js";

const router = Router();

router.use("/health", healthRouter);

export default router;