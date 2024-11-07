import { LogoutButton } from "@components/ui/welcomeBanner/logoutButton";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import { welcomeBannerButtons } from "utils/arrays";
import { afterHover } from "@styles/index";

export const Accordion = ({ windowOppened }: { windowOppened: boolean }) => {
  return (
    <div className="absolute top-0 z-20 w-full">
      <div className={`mt-14 overflow-hidden rounded-3xl bg-white p-0 duration-500 ${windowOppened && "p-2"}`}>
        <Collapse isOpened={windowOppened}>
          {welcomeBannerButtons.map((button) => (
            <Link
              key={button.id}
              to={button.link}
              className="group relative mb-2 block w-full overflow-hidden rounded-full py-2 text-base text-bg opacity-80 duration-500"
            >
              <span className={afterHover()}></span>
              <p className="relative z-10 px-3 duration-500 group-hover:text-white">
                {button.title}
              </p>
            </Link>
          ))}
          <hr className="border-zinc-300" />
          <LogoutButton>
            <span className={afterHover()}></span>
            <p className="z-10 flex w-full items-center justify-between px-3">
              Logout
              <FontAwesomeIcon icon={faRightFromBracket} className="text-lg" />
            </p>
          </LogoutButton>
        </Collapse>
      </div>
    </div>
  );
};
