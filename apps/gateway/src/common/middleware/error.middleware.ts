import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import { ApiError } from "../errors/api-error.js";

export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  // Zod Validation Error
  if (err instanceof ZodError) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Validation failed",
      errors: err.issues,
    });

    return;
  }

  // Custom API Error
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      success: false,
      statusCode: err.statusCode,
      message: err.message,
    });

    return;
  }

  // Unknown Error
  console.error(err);

  res.status(500).json({
    success: false,
    statusCode: 500,
    message: "Internal Server Error",
  });
}