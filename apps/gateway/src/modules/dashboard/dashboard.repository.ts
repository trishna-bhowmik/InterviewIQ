import { prisma } from "../../config/prisma.js";

export class DashboardRepository {
  async getUserStats(userId: string) {
    const interviews = await prisma.interview.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return interviews;
  }
}