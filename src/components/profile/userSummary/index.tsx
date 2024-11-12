import { LoadingButton } from "@components/ui/loadingButton";
import { faCircleInfo, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleUserSummary, ISummary } from "@functions/handleUserSummary";
import { useQuery } from "@tanstack/react-query";
import { SummaryInfo } from "./summaryInfo";

export const UserSummary = () => {
  const { data, isLoading, error } = useQuery<ISummary | null>({
    queryKey: ["summary"],
    queryFn: handleUserSummary,
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <div className="flex h-full w-full flex-1 flex-col items-center gap-4 rounded-xl border border-white bg-bg p-4">
      <div className="flex w-full justify-center gap-2 border-b pb-2">
        <FontAwesomeIcon icon={faCircleInfo} className="text-4xl" />
        <h2 className="text-4xl text-primary">Summary</h2>
      </div>
      {isLoading ? (
        <LoadingButton />
      ) : error ? (
        <p className="flex items-center justify-center gap-2 text-lg">
          <FontAwesomeIcon icon={faTimes} className="text-xl text-primary" />
          An error occurred. Please try again later
        </p>
      ) : (
        data && <SummaryInfo summary={data.summary} />
      )}
    </div>
  );
};
