import { LoadingButton } from "@components/ui/loadingButton";
import { faCircleUser, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  handleProfileData,
  IProfileDataReturn,
} from "@functions/handleProfileData";
import { useQuery } from "@tanstack/react-query";

export const ProfileBanner = () => {
  const { data, isLoading, error } = useQuery<IProfileDataReturn | null>({
    queryKey: ["profileData"],
    queryFn: handleProfileData,
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <div className="flex h-full w-full flex-col flex-wrap items-center justify-between gap-4 rounded-xl border border-white bg-bg p-4 md:w-min md:flex-none">
      <h2 className="flex w-full items-center justify-center gap-2 border-b py-1 text-center font-title text-4xl">
        <FontAwesomeIcon
          icon={faUser}
          className="size-6 rounded-xl bg-white p-2 text-primary"
        />
        Profile
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-4 md:flex-col">
        <FontAwesomeIcon icon={faCircleUser} className="size-64 md:px-10" />
        {isLoading ? (
          <LoadingButton />
        ) : error ? (
          <p className="flex w-full gap-2 rounded-lg bg-white px-4 py-2 text-lg text-bg">
            Data not found
          </p>
        ) : (
          data && (
            <div className="flex max-h-fit w-full flex-col items-center gap-4">
              <p className="flex w-full gap-2 rounded-lg bg-white px-4 py-2 text-lg text-bg">
                Name: <span className="text-primary">{data.user.name}</span>
              </p>
              <p className="flex w-full gap-2 rounded-lg bg-white px-4 py-2 text-lg text-bg">
                Email: <span className="text-primary">{data.user.email}</span>
              </p>
            </div>
          )
        )}
      </div>
      <span className="hidden md:flex"></span>
    </div>
  );
};
