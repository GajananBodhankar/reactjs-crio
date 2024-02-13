import { Button } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import MyListcallback from "./MyListcallback.tsx";

function UseCallback() {
  const [bool, setBool] = useState(false);
  const [input, setInput] = useState(0);
  let ref = useRef<any>();
  let handler = useCallback(() => {
    setBool(!bool);
  }, [input]);
  useEffect(() => {
    console.log(ref.current === handler);
    ref.current = handler;
  });
  return (
    <div>
      <Button onClick={() => setBool(!bool)}>Click</Button>
      <MyListcallback val={input} handler={handler} ref={ref} />
    </div>
  );
}

export default UseCallback;
