import { z } from "zod";

export const evaluationSchema = z.object({
  score: z.number(),

  communication: z.number(),

  technicalAccuracy: z.number(),

  confidence: z.number(),

  strengths: z.array(z.string()),

  improvements: z.array(z.string()),

  feedback: z.string(),
});

export type Evaluation = z.infer<
  typeof evaluationSchema
>;