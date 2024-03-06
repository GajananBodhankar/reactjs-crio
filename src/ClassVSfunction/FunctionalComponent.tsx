import React, { useEffect, useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("component Mounted");
    return () => {
      console.log("component unmounted");
    };
  }, [count]);
  return (
    <div>
      <p>Count value is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default FunctionalComponent;
