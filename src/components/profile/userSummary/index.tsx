import { LoadingButton } from "@components/ui/loadingButton";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleUserSummary, ISummary } from "@functions/handleUserSummary";
import { useQuery } from "@tanstack/react-query";
import { SummaryList } from "./summaryList";

export const UserSummary = () => {
  const { data, isLoading, error } = useQuery<ISummary | null>({
    queryKey: ["summary"],
    queryFn: handleUserSummary,
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <div className="flex h-full flex-1 flex-col items-center gap-4 rounded-xl border border-white bg-bg p-4">
      <div className="flex w-full justify-center gap-2 border-b pb-2">
        <FontAwesomeIcon icon={faCircleInfo} className="text-4xl" />
        <h2 className="text-4xl text-primary">Summary</h2>
      </div>
      {isLoading ? (
        <LoadingButton />
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        data && <SummaryList summary={data.summary} />
      )}
    </div>
  );
};
