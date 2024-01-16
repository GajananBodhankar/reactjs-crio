import React, { useState } from "react";

function CustomUseState() {
  let [count, setCount] = useState(0);
  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };
  return { count, setCount, increment, decrement };
}

function CustomHook() {
  let { count, setCount, increment, decrement } = CustomUseState();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CustomHook;
