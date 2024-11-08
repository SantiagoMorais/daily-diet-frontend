import { LoadingButton } from "@components/ui/loadingButton";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleUserSummary, ISummary } from "@functions/handleUserSummary";
import { summaryListItem } from "@styles/index";
import { useQuery } from "@tanstack/react-query";
import { summaryListItemsDetails } from "utils/arrays";

export const UserSummary = () => {
  const { data, isLoading, error } = useQuery<ISummary | null>({
    queryKey: ["summary"],
    queryFn: handleUserSummary,
    staleTime: 1000 * 60, // 60 seconds
  });

  const getDescription = (type: string): string | undefined => {
    return summaryListItemsDetails.find((item) => item.type === type)
      ?.description;
  };

  return (
    <div className="h-full flex flex-1 flex-col items-center gap-4 rounded-xl border border-white bg-bg p-4">
      <div className="flex w-full justify-center gap-2 border-b pb-2">
        <FontAwesomeIcon icon={faCircleInfo} className="text-4xl" />
        <h2 className="text-4xl text-primary">Summary</h2>
      </div>
      {isLoading ? (
        <LoadingButton />
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        data && (
          <ul className="flex w-full flex-col gap-2">
            {summaryListItemsDetails.map((item) => (
              <li key={item.id} className={summaryListItem()}>
                <p>
                  {item.title}{" "}
                  <span className="text-primary">

                  {data.summary[item.type as keyof ISummary["summary"]]}
                  </span>
                </p>
                <button className="relative text-lg duration-300 hover:scale-105 hover:text-primary">
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    title={`What is it?\n${getDescription(item.type)}`}
                  />
                </button>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};
