import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parent from "./Parent.tsx";
import ChildOne from "./ChildOne.tsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Parent}>
          <Route path="/child" Component={ChildOne} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
