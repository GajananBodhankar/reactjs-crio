import React, { useState } from "react";

function Index() {
  const [count, setCount] = useState(0);
  function handleSubmit() {
    setTimeout(() => {
      //   setCount((prev) => prev + 1);
      setCount(count + 1);
    }, 1000);
  }
  return (
    <div>
      {count}
      <button onClick={handleSubmit}>Increment +1</button>
    </div>
  );
}

export default Index;
