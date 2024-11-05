import { RetunrButton } from "@components/signUp/returnButton";
import { SigninImage } from "./signInImage";
import { SignInInfo } from "./SignInInfo";

export const SignIn = () => {
  return (
    <div className="flex h-full w-screen max-w-screen-2xl items-center justify-center overflow-hidden px-10">
      <div className="relative flex w-full">
        <RetunrButton />

        <SigninImage />

        <SignInInfo />
      </div>
    </div>
  );
};
