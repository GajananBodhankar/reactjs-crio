import React from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import HocComponent from "./HocComponent";

function Parent() {
  let One = HocComponent(ComponentOne);
  let Two = HocComponent(ComponentTwo);
  return (
    <div>
      <One />
      <Two />
    </div>
  );
}

export default Parent;
