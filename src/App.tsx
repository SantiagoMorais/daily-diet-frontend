import { AppRoutes } from "./pages/appRoutes";

export const App = () => {
  return (
    <div className="flex w-full justify-center overflow-hidden">
      <div className="relative min-h-screen max-w-screen-2xl p-10 pt-6">
        <AppRoutes />
      </div>
    </div>
  );
};
