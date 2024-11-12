import { faCheck, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleDeleteMeal } from "@functions/handleDeleteMeal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const DeleteButton = ({ mealId }: { mealId: string }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mutate } = useMutation({
    mutationFn: handleDeleteMeal,
    mutationKey: ["deleteMeal"],
    onMutate: () => setIsLoading(true),
    onSuccess: () => {
      setIsLoading(false);
      queryClient.invalidateQueries({ queryKey: ["listMeals"] });
    },
    onError: () => {
      setIsLoading(false);
      alert(`An error occurred.\nPlease, try again later.`);
    },
  });

  return (
    <div
      className="relative flex-1 overflow-hidden rounded-md bg-primary py-1 text-center text-white duration-300 hover:scale-105 hover:opacity-80"
      title="Delete meal"
      onClick={() => setClicked(true)}
      onMouseLeave={() => setClicked(false)}
    >
      <button
        className={`absolute left-0 top-0 flex h-full w-full origin-right scale-x-0 items-center justify-center gap-2 bg-secondary text-white transition-transform duration-500 ${clicked && "origin-left scale-x-100"}`}
        onClick={() => mutate(mealId)}
        disabled={isLoading}
      >
        Delete meal?
        <FontAwesomeIcon icon={faCheck} />
      </button>

      {isLoading && (
        <span className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-secondary text-white">
          <FontAwesomeIcon icon={faSpinner} spin />
        </span>
      )}

      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};
