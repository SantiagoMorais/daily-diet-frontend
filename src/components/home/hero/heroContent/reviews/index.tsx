import { avatar } from "@styles/index";
import profileImage1 from "@assets/imgs/profile-image-1.jpg";
import profileImage2 from "@assets/imgs/profile-image-2.jpg";
import profileImage3 from "@assets/imgs/profile-image-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { StarIcon } from "@assets/icons/starIcon";

export const Reviews = () => {
  return (
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
  );
};
