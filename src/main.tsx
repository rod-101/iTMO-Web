import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import App from "./pages/App";
import Dashboard from "./components/Dashboard";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/App",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/violation-records",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
