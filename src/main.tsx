import { createRoot } from "react-dom/client";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


import App from "./App.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider initialPermissions={["user", "edit"]}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
