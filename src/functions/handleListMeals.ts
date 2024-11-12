import { env } from "@env/index";
import axios from "axios";

export interface IMeal {
  title: string;
  description: string;
  in_the_diet: boolean | null;
  created_at: string;
  updated_at: string | null;
  meal_id: string;
}

export interface IMealsList {
  meals: IMeal[];
}

export const handleListMeals = async (): Promise<IMealsList | null> => {
  return await axios
    .get<IMealsList>(env.VITE_DATABASE_URL + "/meals", {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return null
    });
};
