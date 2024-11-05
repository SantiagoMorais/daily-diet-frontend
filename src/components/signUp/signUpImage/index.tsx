import signUpImage from "@assets/imgs/sign-up-image.webp";

export const SignUpImage = () => {
  return (
    <div className="relative hidden flex-1 overflow-hidden rounded-l-xl border-2 border-r-0 bg-black sm:block min-h-[35rem]">
      <img
        src={signUpImage}
        alt="Signup image"
        className="size-full object-cover opacity-40"
      />
      <p className="absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl bg-red text-center z-10 auto font-title font-semibold">
        <span className="text-primary">Sign up</span> to start your daily diet
      </p>
    </div>
  );
};
