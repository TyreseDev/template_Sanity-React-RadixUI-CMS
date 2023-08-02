import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./routes";

const App: React.FC = () => {
  return <RouterProvider router={createBrowserRouter(router)} />;
};

export default App;
