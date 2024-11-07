import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { AuthContextProvider } from "@contexts/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
