import mealsBanner from "@assets/imgs/mealsBanner.webp";

export const MealsBanner = () => {
  return (
    <div className="flex h-fit w-full flex-col gap-4">
      <h2 className="w-full border-b pb-3 text-center font-title text-4xl font-semibold">
        Register{" "}
        <span className="rounded-xl bg-white px-2 text-primary">Meals</span>
      </h2>
      <div className="relative h-60 w-full overflow-hidden rounded-xl border-2 border-white bg-black shadow-allAround shadow-zinc-500 md:h-80">
        <img
          src={mealsBanner}
          alt="Meals banner"
          className="h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl px-4 py-2">
          <span className="absolute left-0 top-0 z-0 h-full w-full bg-white opacity-60"></span>
          <h3 className="relative text-center text-2xl md:text-4xl font-semibold text-bg">
            Register your meals and keep on{" "}
            <span className="rounded-xl bg-primary px-2 text-white">diet</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
