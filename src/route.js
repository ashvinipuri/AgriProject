import React from "react";
 import { createBrowserRouter } from "react-router-dom";
 import App from "./App";
 import Home from "./components/Home";
 import History from "./components/History";
 import SellWaste from "./components/SellWaste";
 import FarmerDashboard from "./components/Dashboard";

 const route = createBrowserRouter([
   {
     path: "/",
    element: <App />,
    children: [
      
       {
        path: "/",
        element: <Home />,
      },
       {
        path: "/history",
         element: <History />,
       },
       {
        path:"/sellwaste",
        element: <SellWaste />,
       },
       {
        path: "/dashboard",
         element: <FarmerDashboard />,
       },
     ],
   },
 ]);

 export default route;





