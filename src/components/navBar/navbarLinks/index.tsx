import { useAuthContext } from "@contexts/authContext";
import { afterHover } from "@styles/index";
import { NavLink, useNavigate } from "react-router-dom";
import { navbarLinks } from "utils/arrays";

export const NavbarLinks = () => {
  const { isAuthenticated } = useAuthContext();
  const redirect = useNavigate();

  const handleRedirect = (link: string) => {
    if (isAuthenticated) {
      return redirect(link);
    }
    alert("Please, sign in first!");
    return redirect("/sign-in");
  };

  return (
    <ul className="flex gap-2 md:gap-4">
      {navbarLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.link}
          onClick={(e) => {
            e.preventDefault();
            handleRedirect(link.link);
          }}
          className={({ isActive }) =>
            `group relative overflow-x-hidden rounded-full px-4 py-2 md:px-6 ${isActive && "bg-secondary"}`
          }
        >
          <li className="relative z-10 text-nowrap">{link.name}</li>
          <span className={afterHover()}></span>
        </NavLink>
      ))}
    </ul>
  );
};
