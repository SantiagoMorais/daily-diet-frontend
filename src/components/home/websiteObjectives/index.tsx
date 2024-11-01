import { infoCards } from "utils/arrays";
import { Card } from "./card";

export const WebsiteObjectives = () => {
  return (
    <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-5">
      {infoCards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};
