import { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../../config/prisma.js";

export class InterviewRepository {
  async create(data: Prisma.InterviewUncheckedCreateInput) {
    return prisma.interview.create({
      data,
    });
  }

  async findById(id: string) {
    return prisma.interview.findUnique({
      where: {
        id,
      },
      include: {
        answers: true,
        user: true,
        resume: true,
      },
    });
  }

  async findByUser(userId: string) {
    return prisma.interview.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async updateStatus(
    id: string,
    status:
      | "SCHEDULED"
      | "IN_PROGRESS"
      | "COMPLETED"
      | "CANCELLED"
  ) {
    return prisma.interview.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }

  async updateResult(
  id: string,
  score: number,
  feedback: string
) {
  return prisma.interview.update({
    where: {
      id,
    },
    data: {
      score,
      feedback,
      status: "COMPLETED",
    },
  });
}

  async delete(id: string) {
    return prisma.interview.delete({
      where: {
        id,
      },
    });
  }
}