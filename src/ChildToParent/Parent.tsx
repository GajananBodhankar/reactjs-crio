import React, { useState } from "react";
import Child from "./Child.tsx";

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      I am parent and my count is {count}
      <Child count={count} setCount={setCount} />
    </div>
  );
}

export default Parent;
