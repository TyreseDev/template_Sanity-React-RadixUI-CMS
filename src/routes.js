import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts/main";
import Overview from "./pages/overview";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/overview" replace />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/overview",
        element: <Overview />,
        // loader: teamLoader,
      },
    ],
  },
]);

export default router;
