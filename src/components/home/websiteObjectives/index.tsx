import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { infoCards } from "utils/variables";

export const WebsiteObjectives = () => {
  return (
    <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-5">
      {infoCards.map((card) => (
        <div
          key={card.id}
          className="h-full relative min-w-60 max-w-96 flex-1 select-none overflow-hidden rounded-3xl duration-300 hover:scale-105"
        >
          <span className="shadow-customShadowInner absolute top-32 z-0 h-full w-full rounded-3xl bg-bg shadow-zinc-700"></span>
          <div className="relative flex w-full flex-col items-center gap-3 px-5 pb-10 justify-between h-full">
            <img
              src={card.img}
              alt="Card image"
              className="h-60 w-60 object-contain"
            />
            <h3 className="px-6 text-center text-xl font-semibold text-primary">
              {card.title}
            </h3>
            <p className="px-5 text-center">{card.description}</p>
            <FontAwesomeIcon
              icon={card.icon}
              className="rounded-full bg-white p-3 text-3xl text-primary"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
