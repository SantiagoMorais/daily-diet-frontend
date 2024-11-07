import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./homePage";
import { SignUpPage } from "./signUpPage";
import { SignInPage } from "./signInPage";
import { ProfilePage } from "./profilePage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};
