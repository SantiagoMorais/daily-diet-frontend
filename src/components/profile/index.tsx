import { Footer } from "@components/footer";
import { NavBar } from "@components/navBar";
import { ProfileBanner } from "./profileBanner";
import { useEffect } from "react";
import { useAuthContext } from "@contexts/authContext";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { isAuthenticated } = useAuthContext();
  const redirect = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) redirect("/sign-in");
  }, [isAuthenticated]);

  return (
    <div className="flex min-h-full flex-col justify-center gap-10">
      <NavBar />
      <div className="flex flex-1 flex-col items-center justify-center">
        <ProfileBanner />
      </div>
      <Footer />
    </div>
  );
};
