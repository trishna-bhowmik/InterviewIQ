import { Prisma } from "../../generated/prisma/client.js";

export interface CreateInterviewInput {
  userId: string;
  resumeId: string;
  title: string;
  description?: string;

  type:
    | "TECHNICAL"
    | "HR"
    | "DSA"
    | "SYSTEM_DESIGN"
    | "BEHAVIORAL";

  difficulty: "EASY" | "MEDIUM" | "HARD";

  duration: number;

  questions: Prisma.InputJsonValue;
}