import { LoadingButton } from "@components/ui/loadingButton";
import { handleListMeals, IMealsList } from "@functions/handleListMeals";
import { useQuery } from "@tanstack/react-query";

export const ListMeals = () => {
  const { data, error, isLoading } = useQuery<IMealsList | null>({
    queryFn: handleListMeals,
    queryKey: ["listMeals"],
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {isLoading ? (
        <LoadingButton />
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <>
          {data && data.meals.length > 0 ? (
            <div className="flex w-full flex-col gap-2">
              {data.meals.map((meal) => (
                <div key={meal.meal_id} className="flex w-full bg-bg px-4 py-2 rounded-xl">
                  <h3 className="">Title: <span className="text-primary">{meal.title}</span></h3>
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
