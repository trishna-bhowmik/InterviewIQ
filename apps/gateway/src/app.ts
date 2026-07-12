import express, { type Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

import apiRouter from "./routes/index.js";
import { authRoutes } from "./modules/auth/index.js";
import { notFoundMiddleware } from "./common/middleware/not-found.middleware.js";
import { errorMiddleware } from "./common/middleware/error.middleware.js";
import { resumeRoutes } from "./modules/resume/index.js";
import { aiRoutes } from "./modules/ai/index.js";
import { interviewRoutes } from "./modules/interview/index.js";
import { answerRoutes } from "./modules/answer/index.js";
import { dashboardRoutes } from "./modules/dashboard/index.js";
import profileRoutes from "./modules/profile/profile.routes.js";


const app: Express = express();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", apiRouter);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/resume", resumeRoutes);
app.use("/api/v1/ai", aiRoutes);
app.use("/api/v1/interviews", interviewRoutes);
app.use("/api/v1/answers", answerRoutes);
app.use(
  "/api/v1/dashboard",
  dashboardRoutes
);
app.use("/api/v1/profile", profileRoutes);


// 404 (always after all routes)
app.use(notFoundMiddleware);

// Error handler (always last)
app.use(errorMiddleware);

export default app;