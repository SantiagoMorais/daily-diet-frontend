import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IInfoCards } from "utils/variables";

interface ICardProps {
  card: IInfoCards;
}

export const Card = ({ card }: ICardProps) => {
  return (
    <div
      key={card.id}
      className="relative h-full min-w-60 max-w-96 flex-1 select-none overflow-hidden rounded-3xl duration-300 hover:scale-105"
    >
      <span className="shadow-customShadowInner absolute top-32 z-0 h-full w-full rounded-3xl bg-bg shadow-zinc-700"></span>
      <div className="relative flex h-full w-full flex-col items-center justify-between gap-3 px-5 pb-10">
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
  );
};
