import { env } from "@env/index";
import axios, { AxiosError } from "axios";

export interface IProfileDataReturn {
  user: {
    email: string;
    name: string;
  };
}

export const handleProfileData = async () => { 
  await axios
    .get<IProfileDataReturn>(env.VITE_DATABASE_URL + "/users/profile", {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    }).catch((err: AxiosError) => { 
        return err.isAxiosError
    });
};
