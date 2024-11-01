import { HeroContent } from "./heroContent";
import { HeroImage } from "./heroImage";

export const Hero = () => {
  return (
    <div className="flex h-full w-full flex-col gap-6 md:max-w-screen-xl md:flex-row md:items-center md:justify-center">
      <HeroImage />
      <HeroContent />
    </div>
  );
};
