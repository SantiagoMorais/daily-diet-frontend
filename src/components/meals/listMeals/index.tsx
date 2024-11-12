import { LoadingButton } from "@components/ui/loadingButton";
import { faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleListMeals, IMealsList } from "@functions/handleListMeals";
import { useQuery } from "@tanstack/react-query";

export const ListMeals = () => {
  const { data, error, isLoading } = useQuery<IMealsList | null>({
    queryFn: handleListMeals,
    queryKey: ["listMeals"],
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {isLoading ? (
        <LoadingButton />
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <>
          {data && data.meals.length > 0 ? (
            <div className="grid grid-cols-1 w-full gap-2 md:grid-cols-2">
              {data.meals.map((meal) => (
                <div
                  key={meal.meal_id}
                  className="flex w-full flex-col gap-2 rounded-xl bg-bg px-4 py-2 md:flex-wrap border"
                >
                  <div className="flex flex-col gap-1 text-sm text-primary md:flex-1">
                    <h3 className="relative pb-px text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-l after:bg-gradient-to-r after:from-primary after:to-transparent">
                      Title: <span className="text-white">{meal.title}</span>
                    </h3>
                    <p>
                      Description:{" "}
                      <span className="text-white">{meal.description}</span>
                    </p>
                    <p>
                      In the diet:{" "}
                      <span className="text-white">
                        {meal.in_the_diet ? "YES! 💪🏽" : "NO... 🍔"}
                      </span>
                    </p>
                    <p>
                      Created at:{" "}
                      <span className="text-white">{meal.created_at}</span>
                    </p>
                    {meal.updated_at && (
                      <p>
                        Updated at:
                        <span className="text-white">{meal.updated_at}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex w-full justify-between gap-2">
                    <button className="flex-1 text-center bg-white text-bg rounded-md py-1 duration-300 hover:scale-105 hover:opacity-80" title="Edit meal">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className="flex-1 text-center bg-primary text-white rounded-md py-1 duration-300 hover:scale-105 hover:opacity-80" title="Delete meal">
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Empty list</p>
          )}
        </>
      )}
    </div>
  );
};
