import { faCheck, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleRegisterNewMeal } from "@functions/handleRegisterNewMeal";
import { zodResolver } from "@hookform/resolvers/zod";
import { button, errorMessage } from "@styles/index";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const mealDataSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must have at least 2 characteres" })
    .max(30, { message: "Title must have at most 30 characteres" }),
  description: z
    .string()
    .min(2, { message: "Description must have at least 2 characteres" })
    .max(100, { message: "Description must have at most 100 characteres" }),
  inTheDiet: z.string({ message: "Please select at least one option." }),
});

export type TMealDataSchema = z.infer<typeof mealDataSchema>;

export const RegisterMeal = () => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<TMealDataSchema>({ resolver: zodResolver(mealDataSchema) });

  const { mutate } = useMutation({
    mutationFn: handleRegisterNewMeal,
    mutationKey: ["registerMeal"],
    onMutate: () => setIsLoading(true),
    onSuccess: () => {
      setIsLoading(false);
      queryClient.invalidateQueries({ queryKey: ["listMeals"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  const handleRegisterMeal = (data: TMealDataSchema) => {
    const updatedData = {
      ...data,
      inTheDiet: data.inTheDiet === "true",
    };

    mutate(updatedData);
    reset();
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(handleRegisterMeal)}
        className="flex w-full flex-wrap justify-center gap-x-6 gap-y-3"
      >
        <label
          htmlFor="title"
          className="relative flex h-full min-w-60 flex-1 flex-wrap items-center gap-2"
        >
          Title:
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="w-full rounded-lg border bg-bg px-2 py-1 text-white"
            {...register("title")}
          />
          {errors.title && (
            <p className={errorMessage({ className: "block w-full" })}>
              {errors.title.message}
            </p>
          )}
        </label>

        <label
          htmlFor="inTheDiet"
          className="relative flex h-full min-w-60 flex-1 flex-wrap items-center gap-2 text-nowrap"
        >
          In The Diet:
          <div className="flex w-full gap-4">
            <label
              htmlFor="yes"
              className="flex flex-1 items-center gap-2 rounded-lg border bg-bg px-4 py-1"
            >
              Yes! <FontAwesomeIcon icon={faCheck} className="text-primary" />
              <input
                type="radio"
                id="yes"
                value="true"
                className="rounded-lg border bg-bg px-2 py-1 text-white"
                {...register("inTheDiet")}
              />
            </label>

            <label
              htmlFor="no"
              className="flex flex-1 items-center gap-2 rounded-lg border bg-bg px-4 py-1"
            >
              No! <FontAwesomeIcon icon={faTimes} className="text-primary" />
              <input
                type="radio"
                id="no"
                value="false"
                className="rounded-lg border bg-bg px-2 py-1 text-white"
                {...register("inTheDiet")}
              />
            </label>
          </div>
          {errors.inTheDiet && (
            <p className={errorMessage({ className: "block w-full" })}>
              {errors.inTheDiet.message}
            </p>
          )}
        </label>

        <label
          htmlFor="title"
          className="relative flex h-full min-w-full flex-wrap items-center gap-2"
        >
          Description:
          <input
            type="text"
            id="description"
            placeholder="Description"
            className="w-full rounded-lg border bg-bg px-2 py-1 text-white"
            {...register("description")}
          />
          {errors.description && (
            <p className={errorMessage({ className: "block w-full" })}>
              {errors.description.message}
            </p>
          )}
        </label>

        <button
          disabled={isLoading}
          type="submit"
          className={button({
            color: "secondary",
            format: "rounded",
            hoverEffects: "scale",
            className: "mt-6",
          })}
        >
          {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Register"}
        </button>
      </form>
    </div>
  );
};
