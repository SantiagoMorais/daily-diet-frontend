import { env } from "@env/index";
import axios, { AxiosError } from "axios";
import { z } from "zod";

export interface IResponse {
  message: string;
  status: number;
  type: "success" | "error";
}

export const registerNewUserSchema = z
  .object({
    name: z.string().min(2, "The name must have at least 2 letters."),
    email: z.string().email(),
    password: z
      .string()
      .min(6, "Password must contain at least 6 characters")
      .max(15, "Password must contain at most 15 characters"),
    repeatPassword: z
      .string()
      .min(6, "Password must contain at least 6 characters")
      .max(15, "Password must contain at most 15 characters"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "The passwords not match",
    path: ["repeatPassword"],
  })
  .refine((data) => data.name.includes(" "), {
    message: "Please, fill in the name field at least your name and last name.",
    path: ["name"],
  });

export type IRegisterNewUser = z.infer<typeof registerNewUserSchema>;

export const handleRegisterNewUser = async (data: IRegisterNewUser) => {
  let response: IResponse | undefined = undefined;

  await axios
    .post<IRegisterNewUser>(`${env.VITE_DATABASE_URL}/users`, data)
    .then((res) => {
      response = {
        message: "User registered successfully.",
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
