import React from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/main";
import { client } from "./client";
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
        index: true,
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
          return client.fetch(query);
        },
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
  {
    path: "*",
    element: <Navigate to="/overview" replace />,
  },
];

export default router;
