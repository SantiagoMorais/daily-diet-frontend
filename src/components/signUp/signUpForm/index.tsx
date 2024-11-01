import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { button } from "@styles/index";

const registerNewUser = z
  .object({
    name: z.string().min(2, "The name must have at least 2 letters."),
    email: z.string().email(),
    password: z.string().min(6).max(15),
    repeatPassword: z.string().min(6).max(15),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "The passwords not match",
    path: ["repeatPassword"],
  })
  .refine((data) => data.name.includes(" "), {
    message: "Please, fill in the name field at least your name and last name.",
    path: ["name"],
  });

type IRegisterNewUser = z.infer<typeof registerNewUser>;

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterNewUser>({
    resolver: zodResolver(registerNewUser),
  });

  const handleRegisterUser = async (data: IRegisterNewUser) => {
    const { email, name, password, repeatPassword } = data;
  };

  return (
    <form className="" onSubmit={handleSubmit(handleRegisterUser)}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="w-full rounded-lg bg-bg px-2 py-1 text-white"
          {...register("name")}
        />
      </label>
      {errors.name && (
        <p className="text-sm text-primary py-2">{errors.name.message}</p>
      )}
      <button
        type="submit"
        className={button({ color: "secondary", className: "mt-4" })}
      >
        Register
      </button>
    </form>
  );
};
