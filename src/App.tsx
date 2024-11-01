import { AppRoutes } from "./pages/appRoutes";

export const App = () => {
  return (
    <div className="flex justify-center w-full overflow-hidden">
      <div className="max-w-screen-2xl p-10 pt-6 md:min-h-screen">
        <AppRoutes />
      </div>
    </div>
  );
};
