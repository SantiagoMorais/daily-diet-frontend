import { afterHover } from "@styles/index";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "utils/arrays";

export const NavigationLinks = () => {
  return (
    <nav className="">
      <ul className="flex gap-3 md:flex-col">
        {navbarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.link}
            className={({isActive}) =>
            `group relative self-end overflow-hidden rounded-full px-4 py-2 ${isActive && "bg-secondary"}`
            }
          >
            <li className="relative z-10">{link.name}</li>
            <span className={afterHover()}></span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
