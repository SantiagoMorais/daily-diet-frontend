import { env } from "@env/index";
import axios, { AxiosError } from "axios";

export interface ICheckAuth {
  data: string | null;
  status: number | undefined;
  message: string;
}

export const checkAuth = async (): Promise<ICheckAuth> => {
  let response: ICheckAuth | undefined = undefined;

  await axios
    .get(env.VITE_DATABASE_URL + "/auth/status")
    .then((res) => {
      response = {
        data: res.data,
        status: res.status,
        message: res.statusText,
      };
    })
    .catch((err: AxiosError) => {
      response = {
        data: null,
        status: err.status,
        message: err.message,
      };
    });

  if (!response)
    return { data: null, status: 500, message: "Internal server error" };
  return response;
};
