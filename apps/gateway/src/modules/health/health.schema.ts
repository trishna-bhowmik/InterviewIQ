import { z } from "zod";

export const pingSchema = z.object({
  query: z.object({
    name: z.string().optional(),
  }),

  body: z.object({}),

  params: z.object({}),
});