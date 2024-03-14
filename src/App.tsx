import React, { useCallback, useEffect, useRef, useState } from "react";
import Router from "./UseOutletContext/Router.tsx";
import HocComponent from "./HOC/HocComponent.tsx";

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
  return <HocComponent />;
}

export default App;
