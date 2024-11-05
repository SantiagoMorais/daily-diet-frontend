import signInImage from "@assets/imgs/sign-in-image.webp";

export const SigninImage = () => {
  return (
    <div className="relative hidden flex-1 overflow-hidden rounded-l-xl border-2 border-r-0 bg-black sm:block">
      <div
        className="absolute left-0 top-0 size-full opacity-40"
        style={{
          background: `url(${signInImage}) no-repeat center center`,
        }}
      ></div>
      <p className="bg-red auto absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center font-title text-6xl font-semibold">
        <span className="text-primary">Sign in</span> now to enjoy our platform!
      </p>
    </div>
  );
};
