import { useState } from "react";
import { LogoutWindow } from "./logoutWindow";

export const LogoutButton = ({ children }: React.PropsWithChildren) => {
  const [openWindow, setOpenWindow] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setOpenWindow(true)}
        className="group relative flex w-full items-center justify-between overflow-hidden rounded-full px-1 py-2 text-base text-bg opacity-80 mt-2 hover:text-white duration-500"
      >
        {children}
      </button>

      {openWindow && <LogoutWindow setOpenWindow={setOpenWindow} />}
    </>
  );
};
