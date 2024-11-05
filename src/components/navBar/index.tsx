import { button } from "@styles/index";
import { NavbarLinks } from "./navbarLinks";
import { Logo } from "./logo";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex flex-col mb-10 gap-5 md:flex-row items-center justify-between">
      <Logo />
      <NavbarLinks />
      <div className="flex gap-4">
        <Link to={"/sign-in"} className={button({ color: "secondary", format: "rounded" })}>Sign in</Link>
        <Link to={"/sign-up"} className={button({ color: "primary", format: "rounded" })}>Sign up</Link>
      </div>
    </div>
  );
};
