import { Footer } from "@components/footer";
import { NavBar } from "@components/navBar";
import { ProfileBanner } from "./profileBanner";
import { useEffect } from "react";
import { useAuthContext } from "@contexts/authContext";
import { useNavigate } from "react-router-dom";
import { UserSummary } from "./userSummary";
import { useQueryClient } from "@tanstack/react-query";

export const Profile = () => {
  const { isAuthenticated, loading } = useAuthContext();
  const redirect = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        return redirect("/sign-in");
      }
      queryClient.invalidateQueries({ queryKey: ["summary"] });
      return redirect("/profile");
    }
  }, [loading]);

  return (
    <div className="flex h-full flex-col justify-center gap-10">
      <NavBar />
      <div className="flex flex-1 flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
        <ProfileBanner />
        <UserSummary />
      </div>
      <Footer />
    </div>
  );
};
