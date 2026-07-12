import { z } from "zod";

export const submitAnswerSchema = z.object({
  body: z.object({
    interviewId: z.string(),
    question: z.string(),
    answer: z.string(),
  }),
});