import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./homePage";
import { SignUpPage } from "./signUpPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
