import { HeroImage } from "./heroImage";
import { HeroContent } from "./heroContent";

export const Home = () => {
  return (
    <div className="flex h-full w-full flex-col gap-6 md:max-w-screen-xl md:flex-row md:items-center md:justify-center">
      <HeroImage />
      <HeroContent />
    </div>
  );
};
