import { Footer } from "@components/footer";
import { NavBar } from "@components/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "@assets/imgs/pageNotFoundBanner.jpg";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="flex min-h-full flex-col justify-center gap-10">
      <NavBar />
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4 text-2xl md:text-4xl">
          <FontAwesomeIcon
            icon={faFaceFrown}
            className="text-4xl text-primary md:text-6xl"
          />
          <h2 className="text-center">Sorry, we didn't find your page</h2>
        </div>
        <img
          src={image}
          alt="page not found"
          className="w-full rounded-xl border-2 md:h-[500px] md:w-[500px] md:rounded-full md:object-cover"
        />
      </div>
      <h2 className="text-center text-4xl">
        Page not found <br />{" "}
        <span className="inline-block rounded-xl bg-white p-2 text-primary">
          404
        </span>
      </h2>
      <p className="text-center md:text-xl">
        Please, return to the{" "}
        <Link
          to={"/"}
          className="inline-block text-lg uppercase text-primary duration-300 hover:scale-95 hover:opacity-80 md:text-2xl"
        >
          home page
        </Link>{" "}
        and find what you need!
      </p>
      <Footer />
    </div>
  );
};
