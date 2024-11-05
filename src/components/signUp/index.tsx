import { RetunrButton } from "./returnButton";
import { SignUpImage } from "./signUpImage";
import { SignUpInfo } from "./signUpInfo";

export const SignUp = () => {
  return (
    <div className="flex h-full w-screen max-w-screen-2xl items-center justify-center overflow-hidden px-10">
      <div className="relative flex w-full">
        <RetunrButton />

        <SignUpImage />

        <SignUpInfo />
      </div>
    </div>
  );
};
