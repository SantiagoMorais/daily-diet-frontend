import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./homePage";
import { SignUpPage } from "./signUpPage";
import { SignInPage } from "./singInPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};
