import { HeroImage } from "./heroImage";
import { HeroContent } from "./heroContent";
import { NavBar } from "@components/navBar";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center md:max-h-full md:h-full">
      <NavBar />
      <div className="flex h-full w-full flex-col gap-6 md:max-w-screen-xl md:flex-row md:items-center md:justify-center">
        <HeroImage />
        <HeroContent />
      </div>
    </div>
  );
};
