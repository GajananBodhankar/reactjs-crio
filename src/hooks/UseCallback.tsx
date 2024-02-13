import React, { useCallback, useEffect, useState } from "react";
import SquareComponent from "./SquareComponent.tsx";
function UseCallback() {
  const squareRef = React.useRef(null);
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);
  let handler = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  // let handler = function () {
  //   setCount(count + 1);
  // };
  useEffect(() => {
    console.log(squareRef.current == handler);
    squareRef.current = handler;
  });
  return (
    <>
      <button onClick={() => setBool(!bool)}>
        Change state of parent component
      </button>
      <SquareComponent val={count} handler={handler} ref={squareRef} />
    </>
  );
}
export default UseCallback;
