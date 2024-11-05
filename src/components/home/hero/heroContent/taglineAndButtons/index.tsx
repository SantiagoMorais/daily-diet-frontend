import { button } from "@styles/index";

export const TaglineAndButtons = () => {
  return (
    <>
      <h2 className="sm:text-6gxl font-title text-5xl lg:text-7xl">
        Register your daily meals and stay focused on{" "}
        <span className="text-primary">healthy eating</span>!
      </h2>
      <div className="flex flex-wrap gap-4">
        <button className={button({ color: "secondary", format: "rounded" })}>Register now</button>
        <button className={button({ color: "primary", format: "rounded", className: "px-12" })}>
          About us
        </button>
      </div>
    </>
  );
};
