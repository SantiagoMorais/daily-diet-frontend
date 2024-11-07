import { env } from "@env/index";
import axios, { AxiosError } from "axios";

interface IHandleLogout {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handleLogout = async ({
  setIsLoading,
  setIsAuthenticated,
  setOpenWindow,
}: IHandleLogout) => {
  await axios
    .post(env.VITE_DATABASE_URL + "/logout", {}, { withCredentials: true })
    .then(() => {
      localStorage.setItem("dailyDietAuthentication", JSON.stringify(false));
      setIsLoading(false);
      setOpenWindow(false);
      setIsAuthenticated(false);
    })
    .catch((err: AxiosError) => {
      setIsLoading(false);
      alert(
        `An error occurred, please try again later or reload the page.\nError message: ${err.message}`,
      );
      setOpenWindow(false);
    });
};
