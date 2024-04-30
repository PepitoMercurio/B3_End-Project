import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../components/Header";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />
    },
   
  ]);
    
  const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
  }
    
  export default Routes;