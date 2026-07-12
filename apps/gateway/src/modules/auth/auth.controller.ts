import { Request, Response } from "express";
import { AuthService } from "./auth.service.js";
import { AuthRequest } from "../../common/middleware/auth.middleware.js";
import { ApiError } from "../../common/errors/api-error.js";

const service = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    const user = await service.register(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  }

  async login(req: Request, res: Response) {
  const result = await service.login(req.body);

  res.cookie("refreshToken", result.refreshToken, {
    httpOnly: true,
    secure: false,      // true in production with HTTPS
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    data: {
      user: result.user,
      accessToken: result.accessToken,
    },
  });
}

async refresh(req: Request, res: Response) {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    throw new ApiError(
      401,
      "Refresh token missing"
    );
  }

  const accessToken =
    await service.refresh(
      refreshToken
    );

  res.status(200).json({
    success: true,
    data: {
      accessToken,
    },
  });
}

async me(req: AuthRequest, res: Response) {
  res.json({
    success: true,
    data: req.user,
  });
}

async logout(
  _req: Request,
  res: Response
) {
  res.clearCookie(
    "refreshToken"
  );

  res.status(200).json({
    success: true,
    message: "Logged out successfully.",
  });
}
}