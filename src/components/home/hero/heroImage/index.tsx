import heroImage from "@assets/imgs/hero-image.png";

export const HeroImage = () => {
  return (
    <div className="relative md:order-2 md:flex md:items-center md:justify-center">
      <img
        src={heroImage}
        alt="Hero image"
        className="relative z-10 h-auto w-full -rotate-12 animate-customBounce object-cover md:h-auto md:w-[30dvw] md:min-w-[20rem] md:max-w-[30rem]"
      />
      <span className="absolute bottom-0 left-0 right-0 top-[20dvw] z-0 m-auto h-[90dvw] w-full animate-customBounce rounded-full bg-radialGradient opacity-80 md:bottom-auto md:left-auto md:right-auto md:top-10 md:h-[42vw] md:max-h-[40rem] md:min-h-[25rem] md:w-[42vw] md:min-w-[25rem] md:max-w-[40rem]"></span>
    </div>
  );
};
