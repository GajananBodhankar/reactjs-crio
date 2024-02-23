import React from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Parent from "./Parent.tsx";
import ChildOne from "./ChildOne.tsx";
let router = createBrowserRouter([
  {
    path: "/",
    Component: Parent,
    children: [
      {
        path: "/child",
        Component: ChildOne,
      },
    ],
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
