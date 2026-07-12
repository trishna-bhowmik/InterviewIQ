import { ApiError } from "../../common/errors/api-error.js";
import { AuthRepository } from "./auth.repository.js";
import { LoginInput, RegisterInput } from "./auth.types.js";
import { hashPassword,comparePassword } from "../../common/utils/password.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../common/utils/jwt.js";
import { verifyRefreshToken } from "../../common/utils/jwt.js";
import type { JwtPayload } from "../../common/utils/jwt.js";


export class AuthService {
  private repository = new AuthRepository();

  async register(input: RegisterInput) {
    const existing = await this.repository.findUserByEmail(
      input.email
    );

    if (existing) {
      throw new ApiError(409, "Email already exists");
    }

   const hashedPassword = await hashPassword(input.password);

    const user = await this.repository.createUser({
      ...input,
      password: hashedPassword,
    });

    return {
  id: user.id,
  fullName: user.fullName,
  email: user.email,
  avatar: user.avatar,
  role: user.role,
  isVerified: user.isVerified,
  createdAt: user.createdAt,
};
  }

  async login(input: LoginInput) {
  const user = await this.repository.findUserByEmail(input.email);

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isPasswordValid = await comparePassword(
    input.password,
    user.password
  );

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password");
  }

  const accessToken = generateAccessToken({
  userId: user.id,
  email: user.email,
  role: user.role,
});



const refreshToken = generateRefreshToken({
  userId: user.id,
  email: user.email,
  role: user.role,
});

return {
  user: {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    avatar: user.avatar,
    role: user.role,
    isVerified: user.isVerified,
  },
  accessToken,
  refreshToken,
};
}

async refresh(refreshToken: string) {
  const payload = verifyRefreshToken(
    refreshToken
  ) as JwtPayload;

  const user =
    await this.repository.findUserByEmail(
      payload.email
    );

  if (!user) {
    throw new ApiError(
      401,
      "Invalid refresh token"
    );
  }

  const accessToken =
    generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

  return accessToken;
}
}