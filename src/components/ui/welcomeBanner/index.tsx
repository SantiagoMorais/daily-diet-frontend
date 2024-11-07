import { faCircleUser, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  handleProfileData,
  IProfileDataReturn,
} from "@functions/handleProfileData";
import { useEffect, useState } from "react";
import { LoadingButton } from "../loadingButton";
import { ProfileButton } from "./profileButton";

export const WelcomeBanner = () => {
  const [data, setData] = useState<IProfileDataReturn | null>(null);

  const handleGetProfileData = async () => {
    const profileData = await handleProfileData();
    setData(profileData);
  };

  useEffect(() => {
    handleGetProfileData();
  }, []);

  return <>{data ? <ProfileButton user={data.user} /> : <LoadingButton />}</>;
};
