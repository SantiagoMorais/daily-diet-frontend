import { LoadingButton } from "@components/ui/loadingButton";
import { handleListMeals, IMealsList } from "@functions/handleListMeals";
import { useQuery } from "@tanstack/react-query";
import { MealCard } from "./mealCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faTimes } from "@fortawesome/free-solid-svg-icons";

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
        <p className="flex items-center justify-center gap-2 text-lg">
          <FontAwesomeIcon icon={faTimes} className="text-xl text-primary" />
          An error occurred. Please try again later
        </p>
      ) : (
        <>
          {data && data.meals.length > 0 ? (
            <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
              {data.meals.map((meal) => (
                <MealCard meal={meal} key={meal.meal_id} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <p className="flex items-center gap-2 text-2xl">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  className="rounded-lg bg-white p-2 text-primary"
                />
                Empty list
                <br />
              </p>

              <p className="text-base">Start recording your meals now!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
