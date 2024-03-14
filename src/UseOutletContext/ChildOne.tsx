import React from "react";
import { useOutletContext } from "react-router-dom";
interface Idata {
  count: number;
  setCount: (arg0: number) => void;
}
function ChildOne() {
  const { count, setCount } = useOutletContext<Idata>();
  return (
    <div>
      I am child
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default ChildOne;
