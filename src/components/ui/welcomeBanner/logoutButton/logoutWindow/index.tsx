import { useAuthContext } from "@contexts/authContext";
import {
    faRightFromBracket, faSpinner,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleLogout } from "@functions/handleLogout";
import { button } from "@styles/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ILogoutWindow {
  setOpenWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LogoutWindow = ({ setOpenWindow }: ILogoutWindow) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setIsAuthenticated } = useAuthContext();
  const redirect = useNavigate()

  const handleLogoutUser = async () => {
    setIsLoading(true);

    await handleLogout({ setIsAuthenticated, setIsLoading, setOpenWindow });

    return redirect("/")
  };

  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen max-w-full">
      <span className="absolute left-0 top-0 h-screen w-screen bg-black opacity-50"></span>
      <div className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-xl border-2 border-white bg-bg p-4">
        <button
          onClick={() => setOpenWindow(false)}
          className={button({
            color: "secondary",
            className:
              "absolute -top-14 right-0 size-12 rounded-lg p-2 text-xl hover:scale-110 hover:opacity-80",
          })}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="flex items-center gap-2">
          <p className="max-w-60 text-center text-2xl">
            Are you sure that you want to logout?
          </p>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="rounded-lg bg-white p-4 text-4xl text-bg"
          />
        </div>

        <div className="flex w-full gap-4">
          <button
            onClick={() => handleLogoutUser()}
            disabled={isLoading}
            className={button({
              color: "primary",
              className: "flex-1 rounded-lg hover:scale-110 hover:opacity-80",
            })}
          >
            {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Yes"}
          </button>
          <button
            onClick={() => setOpenWindow(false)}
            disabled={isLoading}
            className={button({
              color: "secondary",
              className: "flex-1 rounded-lg hover:scale-110 hover:opacity-80",
            })}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
