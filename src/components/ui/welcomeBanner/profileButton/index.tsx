import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IProfileDataReturn } from "@functions/handleProfileData";
import { useState } from "react";
import { Accordion } from "./accordion";

export const ProfileButton = (data: IProfileDataReturn) => {
  const [windowOppened, setWindowOppened] = useState<boolean>(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setWindowOppened(true)}
      onMouseLeave={() => setWindowOppened(false)}
    >
      <button
        className={`flex cursor-pointer select-none items-center gap-2 rounded-full border px-4 py-2 text-lg duration-300 ${windowOppened && "shadow-allAround"}`}
      >
        <FontAwesomeIcon icon={faCircleUser} className="text-2xl" />
        <h2 className="text-nowrap">
          Welcome, <span className="text-primary">{data.user.name}</span>
        </h2>
      </button>

      <Accordion windowOppened={windowOppened} />
    </div>
  );
};
