import React from "react";
import HocComponent from "./HocComponent";

function Index({ element }) {
  return (
    <div>
      <p>{element.name}</p>
    </div>
  );
}

export default HocComponent(Index);
