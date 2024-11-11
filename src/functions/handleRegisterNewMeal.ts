import { env } from "@env/index";
import axios, { AxiosError } from "axios";
import { z } from "zod";

export const mealDataSchema = z.object({
  title: z.string().min(2).max(30),
  description: z.string().min(2).max(100),
  inTheDiet: z.boolean(),
});

export type IMealData = z.infer<typeof mealDataSchema>;

export const handleRegisterNewMeal = async (data: IMealData) => {
  await axios
    .post(env.VITE_DATABASE_URL + "/meals", data, { withCredentials: true })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      return err.message;
    });
};
