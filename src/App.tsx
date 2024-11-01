import { AppRoutes } from "./pages/appRoutes";

export const App = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl p-10 pt-6 md:h-screen">
        <AppRoutes />
      </div>
    </div>
  );
};
