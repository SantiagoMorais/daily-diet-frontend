import { LogoutButton } from "@components/ui/logoutButton";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IProfileDataReturn } from "@functions/handleProfileData";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import { welcomeBannerButtons } from "utils/arrays";
import { afterHover } from "@styles/index";

export const ProfileButton = (data: IProfileDataReturn) => {
  const [windowOppened, setWindowOppened] = useState<boolean>(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setWindowOppened(true)}
      onMouseLeave={() => setWindowOppened(false)}
    >
      <button className="flex cursor-pointer select-none items-center gap-2 rounded-full border px-4 py-2 text-lg duration-300 hover:shadow-allAround">
        <FontAwesomeIcon icon={faCircleUser} className="text-2xl" />
        <h2 className="text-nowrap">
          Welcome, <span className="text-primary">{data.user.name}</span>
        </h2>
      </button>

      <div
        className={`absolute z-20 mt-3 flex w-full flex-col overflow-hidden rounded-3xl bg-white p-0 duration-500 ${windowOppened && "p-2"}`}
      >
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
