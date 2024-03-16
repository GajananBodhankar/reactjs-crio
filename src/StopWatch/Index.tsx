import React, { useEffect, useReducer, useRef, useState } from "react";

function Index() {
  const [value, setValue] = useState(0);
  const [hr, setHr] = useState(0);
  let int = useRef<any>(null);
  useEffect(() => {
    if (value + 1 >= 60) {
      setValue(0);
      setHr((prev) => prev + 1);
    }
  }, [value]);
  return (
    <div
      style={{
        height: 200,
        width: 200,
        border: "1px solid black",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems:'center'
      }}
    >
      {hr.toString().length < 2 ? `0${hr}` : `${hr}`}:
      {value.toString().length < 2 ? `0${value}` : value}
      <button
        onClick={() => {
          if (int.current == null) {
            int.current = setInterval(() => {
              setValue((prev) => prev + 1);
            }, 1000);
          }
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setHr(0);
          setValue(0);
          clearInterval(int?.current);
        }}
      >
        Reset
      </button>
      <button onClick={() => clearInterval(int?.current)}>Stop</button>
    </div>
  );
}

export default Index;
