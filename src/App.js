import { RouterProvider, Outlet } from "react-router-dom";
import router from "./routes";

const App = () => {
  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
};

export default App;
