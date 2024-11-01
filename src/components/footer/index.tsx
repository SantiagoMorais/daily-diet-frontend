import { Logo } from "@components/navBar/logo";
import { CreatorInfo } from "./creatorInfo";
import { NavigationLinks } from "./navigationLinks";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-6">
      <hr className="h-px border-none bg-gradient-to-r from-secondary to-zinc-900" />
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-5">
        <Logo />
        <CreatorInfo />
        <NavigationLinks />
      </div>
    </div>
  );
};
