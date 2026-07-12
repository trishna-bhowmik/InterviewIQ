import { z } from "zod";

export const interviewSchema = z.object({
  hr: z.array(z.string()),

  technical: z.array(z.string()),

  projects: z.array(z.string()),

  behavioral: z.array(z.string()),

  coding: z.array(z.string()),
});

export type InterviewQuestions = z.infer<
  typeof interviewSchema
>;