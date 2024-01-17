import React, { useState } from "react";

function customUseState() {
  let [count, setCount] = useState(0);
  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };
  return { count, setCount, increment, decrement };
}

function index() {
  let { count, setCount, increment, decrement } = customUseState();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default index;
