import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import sanityClient from "./helpers/client";
import Overview from "./pages/overview";
import Tasks from "./pages/tasks";
import Projects from "./pages/projects";
import Payments from "./pages/payments";
import Users from "./pages/users";

const router = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/overview",
        element: <Overview />,
        loader: async () => {
          const query = `*[_type == "item"]{
            key,
            name,
            specialties[]->{
              specialty
            },
            rate,
            availability
          }`;
          return sanityClient
            .fetch(query)
            .then((data) => data)
            .catch((err) => []);
        },
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/payments",
        element: <Payments />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/overview" replace />,
  },
];

export default router;
