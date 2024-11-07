import { SignIn } from "@components/signIn";
import { useAuthContext } from "@contexts/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignInPage = () => {
  const { isAuthenticated } = useAuthContext();
  const redirect = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return redirect("/");
  }, [isAuthenticated, redirect]);

  return <SignIn />;
};
