import React, { useEffect, useRef } from "react";

function App() {
  const textref = useRef<HTMLInputElement>(null);
  const count = useRef(0);
  useEffect(() => {
    console.log("Rendered");
  });
  return (
    <div>
      <button
        onClick={() => {
          count.current = count.current + 1;
          console.log(count.current);
        }}
      >
        Increment
      </button>
      <input type="text" ref={textref} />
      <button onClick={() => textref.current?.focus()}>Focus</button>
    </div>
  );
}

export default App;
