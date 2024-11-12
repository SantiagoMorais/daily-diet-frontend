import { IMeal } from "@functions/handleListMeals";
import { DeleteButton } from "./deleteButton";
import { EditButton } from "./editButton";
import { title } from "@styles/index";

export const MealCard = ({ meal }: { meal: IMeal }) => {
  return (
    <div
      key={meal.meal_id}
      className="flex w-full flex-col gap-2 rounded-xl border bg-bg px-4 py-2 md:flex-wrap"
    >
      <div className="flex flex-col gap-1 text-sm text-primary md:flex-1">
        <h3 className={title({ afterEffect: "borderBottom" })}>
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
        <EditButton mealData={meal} />
        <DeleteButton mealId={meal.meal_id} />
      </div>
    </div>
  );
};
