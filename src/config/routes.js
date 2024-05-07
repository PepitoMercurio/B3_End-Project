import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditPage from "../pages/Edit";

const router = createBrowserRouter([
    {
      path: "/",
      element: <EditPage />
    },
   
  ]);
    
  const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
  }
    
  export default Routes;