import signUpImage from "@assets/imgs/sign-up-image.webp";

export const SignUpImage = () => {
  return (
    <div className="hidden flex-1 overflow-hidden rounded-l-xl border-2 border-r-0 bg-black sm:block">
      <img
        src={signUpImage}
        alt="Signup image"
        className="size-full object-cover opacity-60"
      />
    </div>
  );
};
