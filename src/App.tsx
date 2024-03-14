import React, { useCallback, useEffect, useRef, useState } from "react";
import Index from "./HOC/Index.tsx";
import HocComponent from "./HOC/HocComponent.tsx";
import ComponentOne from "./HOC/ComponentOne.tsx";
import ComponentTwo from "./HOC/ComponentTwo.tsx";

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
  let One = HocComponent(ComponentOne);
  let Two = HocComponent(ComponentTwo);
  return (
    <>
      <One />
      <Two />
    </>
  );
}

export default App;
