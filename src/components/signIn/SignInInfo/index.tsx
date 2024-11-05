import { button } from "@styles/index";
import { Link } from "react-router-dom";

export const SignInInfo = () => {
  return (
    <div className="relative flex w-full min-w-64 flex-col gap-5 rounded-xl bg-white p-5 text-bg sm:flex-1 sm:rounded-l-none">
      <h2 className="text-2xl">
        Sign <span className="rounded-xl bg-bg px-2 py-1 text-primary">up</span>
      </h2>
      <div className="flex">
        <p className="flex-1">
          Have not you registered?
          <br />
          Please sign up:
        </p>
        <Link to={"/sign-in"} className={button({ color: "secondary" })}>
          Sign up
        </Link>
      </div>
    </div>
  );
};
