import { z } from "zod";

export const interviewFeedbackSchema = z.object({
  overallScore: z.number(),

  strengths: z.array(z.string()),

  weaknesses: z.array(z.string()),

  recommendations: z.array(z.string()),

  summary: z.string(),
});

export type InterviewFeedback =
  z.infer<typeof interviewFeedbackSchema>;