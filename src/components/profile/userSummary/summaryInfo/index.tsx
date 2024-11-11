import { ISummary } from "@functions/handleUserSummary";
import { SummaryList } from "./summaryList";
import { SummaryChart } from "./summaryChart";

export const SummaryInfo = (data: ISummary) => {
  return (
    <div className="flex w-full flex-col items-center justify-center h-full gap-2">
      <SummaryChart summary={data.summary} />
      <SummaryList summary={data.summary} />
    </div>
  );
};
