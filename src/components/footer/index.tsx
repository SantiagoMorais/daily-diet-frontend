import { Logo } from "@components/navBar/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { afterHover } from "@styles/index";
import { Link } from "react-router-dom";
import { navbarLinks, socialMediaLinks } from "utils/arrays";
import { linkedinCreator } from "utils/variables";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-6">
      <hr className="h-px border-none bg-gradient-to-r from-secondary to-zinc-900" />

      <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-5">
        <Logo />

        <div className="flex w-full min-w-60 flex-col gap-2 md:w-2/5">
          <p className="text-justify">
            This website was created by{" "}
            <a
              href={linkedinCreator}
              target="blank"
              className="cursor-pointer text-nowrap font-semibold text-primary duration-300 hover:opacity-80"
            >
              Felipe Santiago
            </a>
            , Fullstack developer on React, Typescript, Node and SQL databases.
            Contact me on my social media and check-out my{" "}
            <a
              href={linkedinCreator}
              target="blank"
              className="cursor-pointer text-nowrap font-semibold text-primary duration-300 hover:opacity-80"
            >
              Github here
            </a>{" "}
            to see my projects. This project was created just for study and its
            database can reset any time. But enjoy anyway and subscribe and
            register your meals while it's working!
          </p>

          <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl">
              Check my <span className="text-primary">social media</span>:
            </h3>
            <ul className="flex gap-6">
              {socialMediaLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.link}
                  className="group"
                  target="_blank"
                >
                  <li title={link.title}>
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="text-3xl duration-300 group-hover:scale-125 group-hover:text-primary"
                    />
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>

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
      </div>
    </div>
  );
};
