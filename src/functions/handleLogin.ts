import { env } from "@env/index";
import axios, { AxiosError } from "axios";
import { z } from "zod";

export interface IResponse {
  message: string;
  status: number;
  type: "success" | "error";
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type ILogin = z.infer<typeof loginSchema>;

export const handleLogin = async (data: ILogin) => {
  let response: IResponse | undefined = undefined;

  await axios
    .post<ILogin>(`${env.VITE_DATABASE_URL}/login`, data, {
      withCredentials: true,
    })
    .then((res) => {
      response = {
        message: "Successfully login.",
        status: res.status,
        type: "success",
      };
    })
    .catch((err: AxiosError) => {
      const errorResponse = JSON.parse(err.request.response);
      response = {
        message: errorResponse.message,
        status: err.status ? err.status : 500,
        type: "error",
      };
    });

  return { response };
};
