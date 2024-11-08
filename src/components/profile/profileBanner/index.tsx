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
    <div className="min-h-full flex w-full flex-1 flex-wrap items-center justify-center gap-4 rounded-xl border border-white bg-bg p-4 md:w-min md:flex-col md:flex-none">
      <FontAwesomeIcon icon={faCircleUser} className="size-64 md:px-10" />
      {data ? (
        <div className="flex flex-1 flex-col items-center gap-4 w-full">
          <p className="flex w-full gap-2 rounded-lg bg-white px-4 py-2 text-lg text-bg">
            Name: <span className="text-primary">{data.user.name}</span>
          </p>
          <p className="flex w-full gap-2 rounded-lg bg-white px-4 py-2 text-lg text-bg">
            Email: <span className="text-primary">{data.user.email}</span>
          </p>
        </div>
      ) : (
        <LoadingButton />
      )}
    </div>
  );
};
