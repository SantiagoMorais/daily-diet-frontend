import { env } from "@env/index";
import axios, { AxiosError } from "axios";

export interface IMeal {
  title: string;
  description: string;
  in_the_diet: boolean | null;
  created_at: string;
  updated_at: string | null;
  meal_id: string;
}

export const handleListMeals = async () => {
  await axios
    .get<IMeal[]>(env.VITE_DATABASE_URL + "/meals", { withCredentials: true })
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      return err.message;
    });
};
