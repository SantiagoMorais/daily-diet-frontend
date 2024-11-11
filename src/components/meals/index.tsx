import { Footer } from "@components/footer";
import { NavBar } from "@components/navBar";
import { useAuthContext } from "@contexts/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MealsBanner } from "./mealsBanner";
import { RegisterMeal } from "./registerMeal";

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
      <div className="flex h-full flex-1 flex-col flex-wrap items-center gap-4">
        <MealsBanner />
        <RegisterMeal />
      </div>
      <Footer />
    </div>
  );
};
