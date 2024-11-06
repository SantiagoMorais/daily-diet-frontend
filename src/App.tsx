import { checkAuth, ICheckAuth } from "@functions/handleCheckAuth";
import { AppRoutes } from "./pages/appRoutes";
import { useAuthContext } from "@contexts/authContext";
import { useEffect } from "react";

export const App = () => {
  const { setIsAuthenticated } = useAuthContext();

  useEffect(() => {
    const handleAuth = async () => {
      const auth: ICheckAuth = await checkAuth();
      if (auth.status === 401) {
        setIsAuthenticated(false);
      } else if (auth.status === 200) setIsAuthenticated(true);
    };

    handleAuth();
  }, []);

  return (
    <div className="flex w-full justify-center overflow-hidden">
      <div className="relative min-h-screen max-w-screen-2xl p-10 pt-6">
        <AppRoutes />
      </div>
    </div>
  );
};
