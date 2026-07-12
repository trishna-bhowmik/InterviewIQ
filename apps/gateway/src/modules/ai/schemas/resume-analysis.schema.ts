import { z } from "zod";

export const resumeAnalysisSchema = z.object({
  summary: z.string(),

  skills: z.array(z.string()),

  strengths: z.array(z.string()),

  weaknesses: z.array(z.string()),

  projects: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  ),

  recommendations: z.array(z.string()),
});

export type ResumeAnalysis = z.infer<
  typeof resumeAnalysisSchema
>;