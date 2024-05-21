import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditPage from "../pages/Edit";
import Login from "../pages/Login";
import Viewer from "../pages/Viewer";
import Home from "../pages/Home";
import ProtectedRoutes from "./privateroute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/home",
      element: <ProtectedRoutes component={Home} />
    },
    {
      path: "/:id",
      element: <ProtectedRoutes component={Viewer} />
    },
    {
      path: "/edit/:id",
      element: <ProtectedRoutes component={EditPage} />
    },
   
  ]);
    
  const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
  }
    
  export default Routes;