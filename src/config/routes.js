import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditPage from "../pages/Edit";
import Header from "../components/Header";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />
    },
    {
      path: "/:id",
      element: <EditPage />
    },
   
  ]);
    
  const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
  }
    
  export default Routes;