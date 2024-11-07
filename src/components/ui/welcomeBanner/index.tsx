import { faCircleUser, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  handleProfileData,
  IProfileDataReturn,
} from "@functions/handleProfileData";
import { useEffect, useState } from "react";
import { LoadingButton } from "../loadingButton";
import { ProfileButton } from "./profileButton";
import { useAuthContext } from "@contexts/authContext";
import { useNavigate } from "react-router-dom";

export const WelcomeBanner = () => {
  const [data, setData] = useState<IProfileDataReturn | null>(null);
  const { setIsAuthenticated } = useAuthContext();
  const redirect = useNavigate();

  const handleGetProfileData = async () => {
    const profileData = await handleProfileData();
    setData(profileData);
    if (profileData === null) {
      setIsAuthenticated(false);
      redirect("/sign-in");
    }
  };

  useEffect(() => {
    handleGetProfileData();
  }, []);

  return <>{data ? <ProfileButton user={data.user} /> : <LoadingButton />}</>;
};
