import { SignUp } from "@components/signUp";
import { useAuthContext } from "@contexts/authContext";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const { isAuthenticated } = useAuthContext();
  const redirect = useNavigate();

  if (isAuthenticated) return redirect("/");

  return <SignUp />;
};
