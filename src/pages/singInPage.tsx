import { SignIn } from "@components/signIn";
import { useAuthContext } from "@contexts/authContext";
import { useNavigate } from "react-router-dom";

export const SignInPage = () => {
  const { isAuthenticated } = useAuthContext();
  const redirect = useNavigate();

  if (isAuthenticated) return redirect("/");

  return <SignIn />;
};
