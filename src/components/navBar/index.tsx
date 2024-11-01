import { button } from "@styles/index";
import { NavbarLinks } from "./navbarLinks";
import { Logo } from "./logo";

export const NavBar = () => {
  return (
    <div className="flex flex-col mb-10 gap-5 md:flex-row items-center justify-between">
      <Logo />
      <NavbarLinks />
      <div className="flex gap-4">
        <button className={button({ color: "secondary" })}>Sign in</button>
        <button className={button({ color: "primary" })}>Sign up</button>
      </div>
    </div>
  );
};
