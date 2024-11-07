import { env } from "@env/index";
import axios from "axios";

export interface IProfileDataReturn {
  user: {
    email: string;
    name: string;
  };
}

export const handleProfileData =
  async (): Promise<IProfileDataReturn | null> => {
    return await axios
      .get<IProfileDataReturn>(env.VITE_DATABASE_URL + "/users/profile", {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        return null;
      });
  };
