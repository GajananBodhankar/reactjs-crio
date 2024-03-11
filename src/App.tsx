import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [val, setVal] = useState(0);
  const [state, setState] = useState(false);
  const childRef = useRef<any>(null);
  const handleChange = useCallback(() => {
    setState((s) => !s);
  }, [val]);
  useEffect(() => {
    console.log(childRef.current == handleChange);
    childRef.current = handleChange;
  });
  return (
    <div>
      <button ref={childRef} onClick={handleChange}>
        Change state
      </button>
      <p>The value is {val}</p>
      <button onClick={() => setVal(val + 1)}>Increment</button>
    </div>
  );
}

export default App;
