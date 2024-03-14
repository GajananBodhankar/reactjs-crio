import React from "react";

function ComponentOne({ element, setElement }) {
  return (
    <div>
      <p>I am component One</p>
      <p>{element.name}</p>
    </div>
  );
}

export default ComponentOne;
