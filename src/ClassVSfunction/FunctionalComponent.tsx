import React, { useEffect, useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component updated");
    return () => {
      console.log("Component unmounted");
    };
  }, [count]);
  return (
    <div>
      I am count and my value is{count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default FunctionalComponent;
