import { afterHover } from "@styles/index";
import { Link } from "react-router-dom";
import { navbarLinks } from "utils/arrays";

export const NavigationLinks = () => {
  return (
    <nav className="">
      <ul className="flex gap-3 md:flex-col">
        {navbarLinks.map((link) => (
          <Link
            key={link.id}
            to={link.link}
            className="group relative self-end overflow-hidden rounded-full px-4 py-2"
          >
            <li className="relative z-10">{link.name}</li>
            <span className={afterHover()}></span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
