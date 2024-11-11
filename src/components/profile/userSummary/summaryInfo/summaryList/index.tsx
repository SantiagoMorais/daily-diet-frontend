import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISummary } from "@functions/handleUserSummary";
import { summaryListItem } from "@styles/index";
import { summaryListItemsDetails } from "utils/arrays";

export const SummaryList = (data: ISummary) => {
  const getDescription = (type: string): string | undefined => {
    return summaryListItemsDetails.find((item) => item.type === type)
      ?.description;
  };

  return (
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
  );
};
