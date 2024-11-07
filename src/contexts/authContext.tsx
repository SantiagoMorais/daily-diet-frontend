import { env } from "@env/index";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  const localAuthData = localStorage.getItem("dailyDietAuthentication");
  const initialAuthState = localAuthData ? JSON.parse(localAuthData) : false;

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const updateLocalStorage = (value: boolean) => {
    localStorage.setItem("dailyDietAuthentication", JSON.stringify(value));
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(env.VITE_DATABASE_URL + "/auth/status", {
          withCredentials: true,
        });
        setIsAuthenticated(true);
        updateLocalStorage(true);
      } catch {
        setIsAuthenticated(false);
        updateLocalStorage(false);
        if (initialAuthState)
          alert("Your session expired.\nPlease, login again.");
      }
    };

    checkAuth();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used within AuthContextProvider");
  return context;
};
