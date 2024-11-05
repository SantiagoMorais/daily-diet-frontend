import { RetunrButton } from "@components/signUp/returnButton";
import signInImage from "@assets/imgs/sign-in-image.webp";
import { Link } from "react-router-dom";
import { button } from "@styles/index";

export const SignIn = () => {
  return (
    <div className="flex h-full w-screen max-w-screen-2xl items-center justify-center overflow-hidden px-10">
      <div className="relative flex w-full">
        <RetunrButton />

        <div className="relative hidden flex-1 overflow-hidden rounded-l-xl border-2 border-r-0 bg-black sm:block">
          <div
            className="absolute left-0 top-0 size-full opacity-40"
            style={{
              background: `url(${signInImage}) no-repeat center center`,
            }}
          ></div>
          <p className="bg-red auto absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center font-title text-6xl font-semibold">
            <span className="text-primary">Sign in</span> now to enjoy our
            platform!
          </p>
        </div>

        <div className="relative flex w-full min-w-64 flex-col gap-5 rounded-xl bg-white p-5 text-bg sm:flex-1 sm:rounded-l-none">
          <h2 className="text-2xl">
            Sign{" "}
            <span className="rounded-xl bg-bg px-2 py-1 text-primary">up</span>
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
      </div>
    </div>
  );
};
