import { button } from "@styles/index";
import { Link } from "react-router-dom";
import { SignUpForm } from "./signUpForm";
import { RetunrButton } from "./returnButton";
import signUpImage from "@assets/imgs/sign-up-image.webp";

export const SignUp = () => {
  return (
    <div className="flex h-full w-screen max-w-screen-2xl items-center justify-center overflow-hidden px-10">
      <div className="relative flex w-full">
        <RetunrButton />
        <div className="hidden flex-1 overflow-hidden rounded-l-xl border-2 border-r-0 bg-black sm:block">
          <img
            src={signUpImage}
            alt="Signup image"
            className="size-full object-cover opacity-60"
          />
        </div>
        <div className="relative flex w-full min-w-64 flex-col gap-5 rounded-xl bg-white p-5 text-bg sm:flex-1 sm:rounded-l-none">
          <h2 className="text-2xl">
            Sign{" "}
            <span className="rounded-xl bg-bg px-2 py-1 text-primary">up</span>
          </h2>
          <div className="flex">
            <p className="flex-1">
              Are you already registered?
              <br />
              Please Login:
            </p>
            <Link to={"/sign-in"} className={button({ color: "secondary" })}>
              Sign in
            </Link>
          </div>

          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
