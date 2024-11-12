import { env } from "@env/index";
import axios from "axios";

export const handleDeleteMeal = async (mealId: string): Promise<null> => {
  return await axios
    .delete(env.VITE_DATABASE_URL + `/meals/${mealId}`)
};
