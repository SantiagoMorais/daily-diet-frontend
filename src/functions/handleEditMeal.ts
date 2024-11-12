import { env } from "@env/index";
import axios from "axios";
import { z } from "zod";

const editMealSchema = z.object({
  mealId: z.string().uuid(),
  data: z.object({
    description: z.string().optional(),
    inTheDiet: z.boolean().optional(),
    title: z.string().optional(),
  }),
});

type TEditMeal = z.infer<typeof editMealSchema>;

export const handleEditMeal = async ({
  mealId,
  data,
}: TEditMeal): Promise<TEditMeal> => {
  return await axios.post(env.VITE_DATABASE_URL + `/meal/${mealId}`, data, {
    withCredentials: true,
  });
};
