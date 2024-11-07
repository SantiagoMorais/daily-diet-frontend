import { Footer } from "@components/footer";
import { NavBar } from "@components/navBar";
import { ProfileBanner } from "./profileBanner";

export const Profile = () => {
  return (
    <div className="flex min-h-full flex-col justify-center gap-10">
      <NavBar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <ProfileBanner />
        </div>
      <Footer />
    </div>
  );
};
