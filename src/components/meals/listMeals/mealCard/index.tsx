import { faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMeal } from "@functions/handleListMeals";

export const MealCard = ({ meal }: { meal: IMeal }) => {
  return (
    <div
      key={meal.meal_id}
      className="flex w-full flex-col gap-2 rounded-xl border bg-bg px-4 py-2 md:flex-wrap"
    >
      <div className="flex flex-col gap-1 text-sm text-primary md:flex-1">
        <h3 className="relative pb-px text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-l after:bg-gradient-to-r after:from-primary after:to-transparent">
          Title: <span className="text-white">{meal.title}</span>
        </h3>
        <p>
          Description: <span className="text-white">{meal.description}</span>
        </p>
        <p>
          In the diet:{" "}
          <span className="text-white">
            {meal.in_the_diet ? "YES! 💪🏽" : "NO... 🍔"}
          </span>
        </p>
        <p>
          Created at: <span className="text-white">{meal.created_at}</span>
        </p>
        {meal.updated_at && (
          <p>
            Updated at:
            <span className="text-white">{meal.updated_at}</span>
          </p>
        )}
      </div>

      <div className="flex w-full justify-between gap-2">
        <button
          className="flex-1 rounded-md bg-white py-1 text-center text-bg duration-300 hover:scale-105 hover:opacity-80"
          title="Edit meal"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          className="flex-1 rounded-md bg-primary py-1 text-center text-white duration-300 hover:scale-105 hover:opacity-80"
          title="Delete meal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};
