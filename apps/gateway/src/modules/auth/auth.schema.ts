import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    fullName: z
      .string()
      .min(2)
      .max(100),

    email: z
      .email()
      .toLowerCase(),

    password: z
      .string()
      .min(8)
      .max(100),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.email(),

    password: z.string(),
  }),
});
