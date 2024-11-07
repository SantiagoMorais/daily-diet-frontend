import { button } from "@styles/index";
import { useState } from "react";
import { LogoutWindow } from "./logoutWindow";

export const LogoutButton = () => {
  const [openWindow, setOpenWindow] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setOpenWindow(true)}
        className={button({ color: "secondary", format: "rounded" })}
      >
        Logout
      </button>

      {openWindow && <LogoutWindow setOpenWindow={setOpenWindow} />}
    </>
  );
};
