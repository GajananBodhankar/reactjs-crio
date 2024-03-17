import React from "react";
import Hoc from "./Hoc.tsx";
import ChildOne from "./ChildOne.tsx";
import ChildTwo from "./ChildTwo.tsx";

function Wrapper() {
  let One = Hoc(ChildOne);
  let Two = Hoc(ChildTwo);
  return (
    <div>
      <One />
      <Two />
    </div>
  );
}

export default Wrapper;
