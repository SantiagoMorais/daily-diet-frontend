import { useAuthContext } from "@contexts/authContext";
import { button } from "@styles/index";
import { useNavigate } from "react-router-dom";

export const TaglineAndButtons = () => {
  const { isAuthenticated } = useAuthContext();
  const redirect = useNavigate();

  const handleRegister = () => {
    if (isAuthenticated) {
      return redirect("/meals");
    }
    return redirect("/sign-up");
  };

  return (
    <>
      <h2 className="sm:text-6gxl font-title text-5xl lg:text-7xl">
        Register your daily meals and stay focused on{" "}
        <span className="text-primary">healthy eating</span>!
      </h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => handleRegister()}
          className={button({ color: "secondary", format: "rounded" })}
        >
          {isAuthenticated ? "Register meals" : "Register now"}
        </button>
        <a
          className={button({
            color: "primary",
            format: "rounded",
            className: "px-12",
          })}
          href="#footer"
        >
          About us
        </a>
      </div>
    </>
  );
};
