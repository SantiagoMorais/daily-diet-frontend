import { afterHover, button } from "@styles/index";
import { Link } from "react-router-dom";
import { navbarLinks } from "utils/variables";

export const NavBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <Link to={"/"} className="group">
        <h1 className="select-none text-nowrap font-title text-4xl duration-300 group-hover:scale-110">
          Daily{" "}
          <span className="rounded-xl bg-white px-2 text-primary">Diet</span>
        </h1>
      </Link>
      <ul className="flex gap-4">
        {navbarLinks &&
          navbarLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className="group relative overflow-x-hidden rounded-full px-6 py-2"
            >
              <li className="relative z-10">{link.name}</li>
              <span className={afterHover()}></span>
            </Link>
          ))}
      </ul>
      <div className="flex gap-4">
        <button className={button({ color: "secondary" })}>Sign in</button>
        <button className={button({ color: "primary" })}>Sign up</button>
      </div>
    </div>
  );
};
