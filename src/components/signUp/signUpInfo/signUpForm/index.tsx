import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { button, errorMessage } from "@styles/index";
import {
  handleRegisterNewUser,
  IRegisterNewUser,
  registerNewUserSchema,
} from "@functions/handleRegisterNewUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IResponseReturn } from "@interfaces/index";

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterNewUser>({
    resolver: zodResolver(registerNewUserSchema),
  });

  const handleRegisterUser = async (data: IRegisterNewUser) => {
    setIsLoading(true);
    const registerNewUser: IResponseReturn = await handleRegisterNewUser(data);

    if (registerNewUser.response?.type === "error") {
      alert(registerNewUser.response.message);
      return;
    }

    alert(registerNewUser.response?.message);
    setIsLoading(false);
    return redirect("/");
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className="flex h-full flex-col justify-between gap-2"
      onSubmit={handleSubmit(handleRegisterUser)}
    >
      <div>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="w-full rounded-lg bg-bg px-2 py-1 text-white"
            {...register("name")}
          />
          {errors.name && (
            <p className={errorMessage()}>{errors.name.message}</p>
          )}
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            className="w-full rounded-lg bg-bg px-2 py-1 text-white"
            {...register("email")}
          />
          {errors.email && (
            <p className={errorMessage()}>{errors.email.message}</p>
          )}
        </label>

        <label htmlFor="password">
          Password:
          <div className="flex">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="w-full rounded-lg rounded-r-none bg-bg px-2 py-1 text-white"
              {...register("password")}
            />
            <button
              type="button"
              className="rounded-r-lg bg-bg px-2 text-white"
              onClick={() => togglePassword()}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          {errors.password && (
            <p className={errorMessage()}>{errors.password.message}</p>
          )}
        </label>

        <label htmlFor="repeatPassword">
          Repeat Password:
          <div className="flex">
            <input
              type={showPassword ? "text" : "password"}
              id="repeatPassword"
              placeholder="Repeat Password"
              className="w-full rounded-lg rounded-r-none bg-bg px-2 py-1 text-white"
              {...register("repeatPassword")}
            />
            <button
              type="button"
              className="rounded-r-lg bg-bg px-2 text-white"
              onClick={() => togglePassword()}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          {errors.repeatPassword && (
            <p className={errorMessage()}>{errors.repeatPassword.message}</p>
          )}
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={button({
          color: "secondary",
          format: "full",
          className: "rounded-lg",
        })}
      >
        {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Register"}
      </button>
    </form>
  );
};
