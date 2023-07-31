import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts/main";
import Overview from "./pages/overview";
import Tasks from "./pages/tasks";
import Projects from "./pages/projects";
import Payments from "./pages/payments";
import Users from "./pages/users";

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
      {
        index: true,
        path: "/tasks",
        element: <Tasks />,
      },
      {
        index: true,
        path: "/projects",
        element: <Projects />,
      },
      {
        index: true,
        path: "/payments",
        element: <Payments />,
      },
      {
        index: true,
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
