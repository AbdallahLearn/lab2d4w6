import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../component/Home";
import React from 'react'
import Inform from "../component/Inform";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
        path: "/inform/:id",
        element: <Inform/>
      },
  ]);

function Router() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Router
