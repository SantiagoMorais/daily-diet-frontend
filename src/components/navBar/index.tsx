import { button } from "@styles/index";
import { NavbarLinks } from "./navbarLinks";
import { Logo } from "./logo";
import { Link } from "react-router-dom";
import { useAuthContext } from "@contexts/authContext";
import { WelcomeBanner } from "@components/ui/welcomeBanner";

export const NavBar = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="mb-10 flex flex-col items-center justify-between gap-5 lg:flex-row">
      <Logo />
      <NavbarLinks />
      {!isAuthenticated ? (
        <div className="flex gap-4">
          <Link
            to={"/sign-in"}
            className={button({ color: "secondary", format: "rounded" })}
          >
            Sign in
          </Link>
          <Link
            to={"/sign-up"}
            className={button({ color: "primary", format: "rounded" })}
          >
            Sign up
          </Link>
        </div>
      ) : (
        <>
        <WelcomeBanner />
        </>
      )}
    </div>
  );
};
