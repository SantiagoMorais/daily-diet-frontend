import { faCircleUser, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  handleProfileData,
  IProfileDataReturn,
} from "@functions/handleProfileData";
import { useEffect, useState } from "react";

export const WelcomeBanner = () => {
  const [data, setData] = useState<IProfileDataReturn | null>(null);

  const handleGetProfileData = async () => {
    const profileData = await handleProfileData();
    setData(profileData);
  };

  useEffect(() => {
    handleGetProfileData();
  }, []);

  return (
    <>
      {data ? (
        <button className="flex cursor-pointer select-none items-center gap-2 rounded-full border px-4 py-2 text-lg duration-300 hover:shadow-allAround">
          <FontAwesomeIcon icon={faCircleUser} className="text-2xl" />
          <h2>
            Welcome, <span className="text-primary">{data.user.name}</span>
          </h2>
        </button>
      ) : (
        <p className="flex select-none items-center gap-2 rounded-full border px-4 py-2 text-lg">
          <FontAwesomeIcon icon={faSpinner} spin />
          Loading
        </p>
      )}
    </>
  );
};
