import { prisma } from "../../config/prisma.js";

export class AuthRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }


  async createUser(data: {
    fullName: string;
    email: string;
    password: string;
  }) {
    return prisma.user.create({
      data,
    });
  }
}