import { Reviews } from "./reviews";
import { TaglineAndButtons } from "./taglineAndButtons";

export const HeroContent = () => {
  return (
    <div className="flex flex-col gap-10 md:w-1/2">
      <TaglineAndButtons />
      <Reviews />
    </div>
  );
};
