import React from "react";

function Child(props) {
  return (
    <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
  );
}

export default Child;
