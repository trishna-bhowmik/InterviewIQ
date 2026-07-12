import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),

  NODE_ENV: z.enum([
    "development",
    "production",
    "test",
  ]),

  APP_NAME: z.string(),

  APP_VERSION: z.string(),

  JWT_ACCESS_SECRET: z.string().min(20),

  JWT_REFRESH_SECRET: z.string().min(20),

  GEMINI_API_KEY: z.string().min(20),

  CLOUDINARY_CLOUD_NAME: z.string(),

  CLOUDINARY_API_KEY: z.string(),

  CLOUDINARY_API_SECRET: z.string(),

  FFRONTEND_URL: z.string().optional(),
});

export const env = envSchema.parse(
  process.env
);