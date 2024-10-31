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
    <div className="flex h-full w-full flex-col gap-6 md:max-w-screen-xl md:flex-row md:items-center md:justify-center">
      <div className="relative md:order-2 md:flex md:items-center md:justify-center">
        <img
          src={heroImage}
          alt="Hero image"
          className="animate-customBounce relative z-10 h-auto w-full -rotate-12 object-cover md:h-auto md:w-[30dvw] md:min-w-[20rem] md:max-w-[30rem]"
        />
        <span className="animate-customBounce bg-radialGradient absolute bottom-0 left-0 right-0 top-[20dvw] z-0 m-auto h-[90dvw] w-full rounded-full opacity-80 md:bottom-auto md:left-auto md:right-auto md:top-10 md:h-[42vw] md:max-h-[40rem] md:min-h-[25rem] md:w-[42vw] md:min-w-[25rem] md:max-w-[40rem]"></span>
      </div>
      <div className="flex flex-col gap-10 md:w-1/2">
        <h2 className="sm:text-6gxl font-title text-5xl lg:text-7xl">
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
          <p className="tracking-widest">Reviews</p>
          <div className="flex pl-3">
            <img className={avatar()} src={profileImage1} alt="profile image" />
            <img className={avatar()} src={profileImage2} alt="profile image" />
            <img className={avatar()} src={profileImage3} alt="profile image" />
            <span className="-ml-3 flex size-14 items-center justify-center rounded-full border-2 border-white bg-bg text-xl">
              +96
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
