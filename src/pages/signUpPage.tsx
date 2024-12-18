import { SignUp } from "@components/signUp";
import { useAuthContext } from "@contexts/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const { isAuthenticated } = useAuthContext();
  const redirect = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return redirect("/");
  }, [isAuthenticated, redirect]);

  return <SignUp />;
};
