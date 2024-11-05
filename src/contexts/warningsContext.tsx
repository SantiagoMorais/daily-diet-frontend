import { createContext, useContext, useEffect, useState } from "react";

interface IWarningsContext {
  warning: string | null;
  setWarning: React.Dispatch<React.SetStateAction<string | null>>;
}

export const WarningsContext = createContext<IWarningsContext>({
  warning: null,
  setWarning: () => {},
});

export const WarningsContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [warning, setWarning] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setWarning(null);
    }, 5000);
  }, [warning]);

  return (
    <WarningsContext.Provider value={{ warning, setWarning }}>
      {children}
    </WarningsContext.Provider>
  );
};

export const useWarningsContext = () => {
  const context = useContext(WarningsContext);
  if (!context) {
    throw new Error(
      "useWarningsContext must be used within a WarningsContextProvider",
    );
  }

  return context;
};
