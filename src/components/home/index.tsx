import heroImage from "@assets/imgs/hero-image.png";
import { avatar, button } from "@styles/index";
import profileImage1 from "@assets/imgs/profile-image-1.jpg";
import profileImage2 from "@assets/imgs/profile-image-2.jpg";
import profileImage3 from "@assets/imgs/profile-image-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { StarIcon } from "@assets/icons/starIcon";

export const Home = () => {
  return (
    <div className="w-ful flex flex-col gap-6 md:flex-row md:justify-center md:max-w-screen-xl ">
      <div className="md:order-2 md:flex md:items-center md:justify-center">
        <img
          src={heroImage}
          alt="Hero image"
          className="w-full object-cover md:h-auto md:w-[30dvw] md:max-w-[30rem] md:min-w-[20rem]"
        />
      </div>
      <div className="flex flex-col gap-10 md:w-1/2">
        <h2 className="font-title text-5xl lg:text-7xl sm:text-6gxl">
          Register your daily meals and stay focused on{" "}
          <span className="text-primary">healthy eating</span>!
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className={button({ color: "secondary" })}>
            Register now
          </button>
          <button className={button({ color: "primary", className: "px-12" })}>
            About us
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p>Reviews</p>
          <div className="flex pl-3">
            <img className={avatar()} src={profileImage1} alt="profile image" />
            <img className={avatar()} src={profileImage2} alt="profile image" />
            <img className={avatar()} src={profileImage3} alt="profile image" />
            <span className="-ml-3 flex size-14 items-center justify-center rounded-full border-2 border-white bg-bg text-xl">
              +12
            </span>
          </div>
          <div className="flex space-x-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <StarIcon key={index} className="size-6 text-yellow-400" />
            ))}
            <FontAwesomeIcon
              icon={faStarHalfAlt}
              className="size-6 text-lg text-yellow-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
