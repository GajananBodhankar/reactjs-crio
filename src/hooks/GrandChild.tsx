import React, { useContext } from "react";
import { Context } from "./Parent.tsx";

function GrandChild() {
  const { count, setCount } = useContext(Context);
  return (
    <div>
      <p>I am child, count={count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default GrandChild;
