import { env } from "@env/index";
import axios from "axios";

interface IHandleRegisterNewUser {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const handleRegisterNewUser = ({
  name,
  email,
  password,
  repeatPassword,
}: IHandleRegisterNewUser) => {
  axios
    .post<IHandleRegisterNewUser>(`${env.VITE_DATABASE_URL}/users`, {
      name,
      email,
      password,
      repeatPassword,
    })
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => {
      return err
    });
};
