import { env } from "@env/index";
import axios, { AxiosError } from "axios";

export interface ICheckAuth {
  data: string | null;
  status: number;
  message: string;
}

export const checkAuth = async () => {
  await axios
    .get(env.VITE_DATABASE_URL + "/auth/status")
    .then((res) => {
      return { data: res.data, status: res.status, message: res.statusText };
    })
    .catch((err: AxiosError) => {
      return { data: null, status: err.status, message: err.message };
    });
};
