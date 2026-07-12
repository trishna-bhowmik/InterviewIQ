import { z } from "zod";

export const createInterviewSchema = z.object({
  body: z.object({
    resumeId: z.string(),

    title: z.string().min(3),

    description: z.string().optional(),

    type: z.enum([
      "HR",
      "TECHNICAL",
      "DSA",
      "SYSTEM_DESIGN",
      "BEHAVIORAL",
    ]),

    difficulty: z.enum([
      "EASY",
      "MEDIUM",
      "HARD",
    ]),

    duration: z.number().min(10).max(180),
  }),
});