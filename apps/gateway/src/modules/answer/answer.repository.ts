import { prisma } from "../../config/prisma.js";

export class AnswerRepository {
  async create(data: {
    interviewId: string;
    question: string;
    answer: string;
    score?: number;
    feedback?: string;
  }) {
    return prisma.answer.create({
      data,
    });
  }

  async findByInterview(interviewId: string) {
    return prisma.answer.findMany({
      where: {
        interviewId,
      },
      orderBy: {
        createdAt: "asc",
      },
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

  async delete(id: string) {
    return prisma.answer.delete({
      where: {
        id,
      },
    });
  }

  async countByInterview(interviewId: string) {
  return prisma.answer.count({
    where: {
      interviewId,
    },
  });
}

async getAverageScore(interviewId: string) {
  const result = await prisma.answer.aggregate({
    where: {
      interviewId,
    },
    _avg: {
      score: true,
    },
  });

  return result._avg.score ?? 0;
}
}