import { Footer } from "@components/footer";
import { NavBar } from "@components/navBar";
import { useAuthContext } from "@contexts/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Meals = () => {
  const { isAuthenticated, loading } = useAuthContext();
  const redirect = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        return redirect("/sign-in");
      }
      return redirect("/meals");
    }
  }, [loading]);

  return (
    <div className="flex h-full flex-col justify-center gap-10">
      <NavBar />
      <div className="flex flex-1 flex-col flex-wrap items-center justify-center gap-4 md:flex-row"></div>
      <Footer />
    </div>
  );
};
