import { prisma } from "../../config/prisma.js";

export class ProfileRepository {
  async getProfile(userId: string) {
    return prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        avatar: true,
        createdAt: true,

        resumes: {
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },

        interviews: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
  }
}