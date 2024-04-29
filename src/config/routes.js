import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Routes />
    },
   
  ]);
    
  const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
  }
    
  export default Routes;