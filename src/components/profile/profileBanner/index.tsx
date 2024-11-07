import { LoadingButton } from "@components/ui/loadingButton";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  handleProfileData,
  IProfileDataReturn,
} from "@functions/handleProfileData";
import { useEffect, useState } from "react";

export const ProfileBanner = () => {
  const [data, setData] = useState<IProfileDataReturn | null>(null);

  const handleGetProfileData = async () => {
    const profileData = await handleProfileData();
    setData(profileData);
  };

  useEffect(() => {
    handleGetProfileData();
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-bg 500 w-min items-center h-fit p-4 rounded-xl border-white border">
      <FontAwesomeIcon icon={faCircleUser} className="size-64 px-10" />
      {data ? (
        <div className="flex flex-col items-center gap-4">
          <p className="bg-white text-bg px-4 py-2 text-lg w-full rounded-lg flex gap-2">
            Name: <span className="text-primary">{data.user.name}</span>
          </p>
          <p className="bg-white text-bg px-4 py-2 text-lg w-full rounded-lg flex gap-2">
            Email: <span className="text-primary">{data.user.email}</span>
          </p>
        </div>
      ) : (
        <LoadingButton />
      )}
    </div>
  );
};
