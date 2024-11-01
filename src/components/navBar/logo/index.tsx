import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"} className="group">
      <h1 className="select-none text-nowrap font-title text-4xl duration-300 group-hover:scale-110">
        Daily{" "}
        <span className="rounded-xl bg-white px-2 text-primary">Diet</span>
      </h1>
    </Link>
  );
};
