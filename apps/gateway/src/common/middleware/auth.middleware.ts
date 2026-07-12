import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/api-error.js";
import { verifyAccessToken } from "../utils/jwt.js";

export interface AuthRequest extends Request {
  user?: {
    userId: string;
    email: string;
    role: string;
  };
}

export function authenticate(
  req: AuthRequest,
  _res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    throw new ApiError(401, "Unauthorized");
  }

  const token = authHeader.substring(7);

  try {
    req.user = verifyAccessToken(token) as AuthRequest["user"];
    next();
  } catch {
    throw new ApiError(401, "Invalid or expired token");
  }
}