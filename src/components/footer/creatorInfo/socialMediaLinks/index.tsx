import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaLinks } from "utils/arrays";

export const SocialMediaLinks = () => {
  return (
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
  );
};
