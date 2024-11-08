import { Footer } from "@components/footer";
import { NavBar } from "@components/navBar";
import { ProfileBanner } from "./profileBanner";
import { useEffect } from "react";
import { useAuthContext } from "@contexts/authContext";
import { useNavigate } from "react-router-dom";
import { UserSummary } from "./userSummary";

export const Profile = () => {
  const { isAuthenticated } = useAuthContext();
  const redirect = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) redirect("/sign-in");
  }, [isAuthenticated]);

  return (
    <div className="flex h-full flex-col justify-center gap-10">
      <NavBar />
      <div className="flex flex-1 flex-wrap flex-col items-center justify-center gap-4 md:flex-row">
        <ProfileBanner />
        <UserSummary />
      </div>
      <Footer />
    </div>
  );
};
