import signInImage from "@assets/imgs/sign-in-image.webp";

export const SigninImage = () => {
  return (
    <div className="relative hidden min-h-[35rem] flex-1 overflow-hidden rounded-l-xl border-2 border-r-0 bg-black sm:flex">
      <img
        src={signInImage}
        alt="Sing in image"
        className="absolute opacity-40 bottom-0 top-0 m-auto w-full min-h-full object-cover"
      />
      <p className="bg-red auto absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center font-title text-6xl font-semibold">
        <span className="text-primary">Sign in</span> now to enjoy our platform!
      </p>
    </div>
  );
};
