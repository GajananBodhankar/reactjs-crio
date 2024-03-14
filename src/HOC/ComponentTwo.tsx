import React from "react";

function ComponentTwo({ element, setElement }) {
  return (
    <div>
      I am component Two
      <p>{element.name}</p>
    </div>
  );
}

export default ComponentTwo;
