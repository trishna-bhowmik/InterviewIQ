import { prisma } from "../../config/prisma.js";

export class ResumeRepository {
  async createResume(data: {
    userId: string;
    originalName: string;
    filename: string;
    mimeType: string;
    size: number;
    path: string;
  }) {
    return prisma.resume.create({
      data,
    });
  }

  async getResumeByUserId(userId: string) {
    return prisma.resume.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async updateExtractedText(
  id: string,
  extractedText: string
) {
  return prisma.resume.update({
    where: { id },
    data: {
      extractedText,
    },
  });
}

async getResumeById(id: string) {
  return prisma.resume.findUnique({
    where: {
      id,
    },
  });
}

async deleteResume(
  id: string,
  userId: string
) {
  return prisma.resume.deleteMany({
    where: {
      id,
      userId,
    },
  });
}
}