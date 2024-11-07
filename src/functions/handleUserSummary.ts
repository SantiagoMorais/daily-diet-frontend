import { env } from "@env/index";
import axios from "axios";

interface ISummary {
  summary: {
    mealsRegistered: number;
    mealsInTheDiet: number;
    mealsOutTheDiet: number;
    bestDietSequency: number;
  };
}

export const handleUserSummary = async (): Promise<ISummary | null> => {
  return await axios
    .get<ISummary>(env.VITE_DATABASE_URL + "/summary", {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
};
