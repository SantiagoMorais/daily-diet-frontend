import { IMeal } from "@functions/handleListMeals";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { button } from "@styles/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { handleEditMeal, TEditMeal } from "@functions/handleEditMeal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";

interface IEditMealForm {
  mealData: IMeal;
  setOpenWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

const mealSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title field must have at least 2 characteres" })
    .max(30, { message: "Title field must have at most 30 characteres" }),
  description: z
    .string()
    .min(2, { message: "Description field must have at least 2 characteres" })
    .max(100, {
      message: "Description field must have at most 100 characteres",
    }),
  inTheDiet: z.string({ message: "Please, select at least one." }),
});

type TMealSchema = z.infer<typeof mealSchema>;

export const EditMealForm = ({ mealData, setOpenWindow }: IEditMealForm) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<TMealSchema>({
    resolver: zodResolver(mealSchema),
    defaultValues: {
      title: mealData.title,
      description: mealData.description,
      inTheDiet: JSON.stringify(mealData.in_the_diet),
    },
  });

  const { mutate, error } = useMutation({
    mutationFn: handleEditMeal,
    mutationKey: ["editMeal"],
    onMutate: () => setIsLoading(true),
    onSuccess: () => {
      setIsLoading(false),
        queryClient.invalidateQueries({ queryKey: ["listMeals"] });
      setOpenWindow(false);
    },
    onError: () => {
      setIsLoading(false);
      alert(`An error occurred.\nPlease try again later: ${error?.message}`);
      setOpenWindow(false);
    },
  });

  const handleSubmitForm = (data: TMealSchema) => {
    const updatedData: TEditMeal = {
      mealId: mealData.meal_id,
      data: {
        title: data.title,
        description: data.description,
        inTheDiet: data.inTheDiet === "true",
      },
    };

    mutate(updatedData);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex w-full flex-col gap-2 md:min-w-[600px]"
    >
      <label
        htmlFor="editTitle"
        className="flex flex-col gap-x-2 gap-y-1 md:flex-row md:items-center"
      >
        Title:
        <input
          maxLength={30}
          type="text"
          id="editTitle"
          className="rounded-lg border-2 bg-black px-2 py-1 text-white md:flex-1"
          {...register("title")}
        />
      </label>
      {errors.title && <p className="text-primary">{errors.title.message}</p>}

      <label
        htmlFor="editDescription"
        className="flex flex-col gap-x-2 gap-y-1 md:flex-row md:items-center"
      >
        Description:
        <input
          maxLength={100}
          type="text"
          id="editDescription"
          className="rounded-lg border-2 bg-black px-2 py-1 text-white md:flex-1"
          {...register("description")}
        />
      </label>
      {errors.description && (
        <p className="text-primary">{errors.description.message}</p>
      )}

      <label className="flex flex-col gap-x-2 gap-y-1 md:flex-row md:items-center">
        In the diet:
        <div className="flex gap-2 flex-wrap md:flex-1">
          <label
            htmlFor="editYes"
            className="flex flex-1 items-center justify-center gap-1 text-nowrap rounded-lg border-2 bg-black px-4 py-1 min-w-52"
          >
            Yes! 💪🏽
            <input
              type="radio"
              id="editYes"
              value="true"
              {...register("inTheDiet")}
            />
          </label>
          <label
            htmlFor="editNo"
            className="flex flex-1 items-center justify-center gap-2 text-nowrap rounded-lg border-2 bg-black px-4 py-1 min-w-52"
          >
            No... 🍔
            <input
              type="radio"
              id="editNo"
              value="false"
              {...register("inTheDiet")}
            />
          </label>
        </div>
      </label>
      {errors.inTheDiet && (
        <p className="text-primary">{errors.inTheDiet.message}</p>
      )}

      <div className="mt-2 flex justify-between gap-2">
        <button
          type="submit"
          className={button({
            format: "common",
            color: "primary",
            className: "flex-1 hover:scale-95",
          })}
          disabled={isLoading}
        >
          {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Confirm"}
        </button>
        <button
          onClick={() => setOpenWindow(false)}
          type="button"
          className={button({
            format: "common",
            color: "secondary",
            className: "flex-1 hover:scale-95",
          })}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
