import { LoadingButton } from "@components/ui/loadingButton";
import { handleListMeals, IMealsList } from "@functions/handleListMeals";
import { useQuery } from "@tanstack/react-query";
import { MealCard } from "./mealCard";

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
            <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
              {data.meals.map((meal) => (
                <MealCard meal={meal} key={meal.meal_id} />
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
