import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [val, setVal] = useState(0);
  const [bool, setBool] = useState(false);
  const refer = useRef<HTMLButtonElement>(null);
  const handleChange = useCallback(() => setVal((prev) => prev + 1), [val]);
  useEffect(() => {
    console.log(refer.current == handleChange);
    refer.current = handleChange;
  });
  return (
    <div>
      <button onClick={handleChange} ref={refer}>
        Increment
      </button>
      <p>Value is {val}</p>
      <button onClick={() => setBool((prev) => !prev)}>Change bool</button>
    </div>
  );
}

export default App;
