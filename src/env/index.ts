import { z } from "zod";

const envSchema = z.object({
  VITE_DATABASE_URL: z.string(),
});

const _env = envSchema.safeParse(import.meta.env);

if (_env.success === false) {
  console.log("Invalid environment variables!", _env.error.format());
  throw new Error("Invalid environment variables!");
}

export const env = _env.data;
