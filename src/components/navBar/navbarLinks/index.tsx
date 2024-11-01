import { afterHover } from "@styles/index";
import { Link } from "react-router-dom";
import { navbarLinks } from "utils/arrays";

export const NavbarLinks = () => {
  return (
    <ul className="flex gap-2 md:gap-4">
      {navbarLinks.map((link) => (
        <Link
          key={link.id}
          to={link.link}
          className="group relative overflow-x-hidden rounded-full px-4 py-2 md:px-6"
        >
          <li className="relative z-10 text-nowrap">{link.name}</li>
          <span className={afterHover()}></span>
        </Link>
      ))}
    </ul>
  );
};
