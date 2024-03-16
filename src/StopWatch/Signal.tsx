import React, { useEffect, useState } from "react";

function Signal() {
  const [showRed, setShowRed] = useState(true);
  const [showYellow, setShowYellow] = useState(false);
  const [showGreen, setShowGreen] = useState(false);
  useEffect(() => {
    let x = setInterval(() => {
      setShowRed((prev) => {
        if (prev == true) {
          setShowYellow((prev) => !prev);
          setTimeout(() => {
            setShowGreen((prev) => !prev);
            setShowYellow((prev) => !prev);
          }, 3000);
          return false;
        } else {
          setShowGreen(false);
          return true;
        }
      });
    }, 10000);

    return () => {
      clearInterval(x);
    };
  }, []);
  return (
    <div
      style={{
        height: 200,
        width: 200,
        margin: "auto",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          height: 20,
          width: 20,
          backgroundColor: showRed ? "red" : "white",
          margin: "auto",
        }}
      ></div>
      <div
        style={{
          height: 20,
          width: 20,
          backgroundColor: showYellow ? "yellow" : "white",
          margin: "auto",
        }}
      ></div>
      <div
        style={{
          height: 20,
          width: 20,
          backgroundColor: showGreen ? "green" : "white",
          margin: "auto",
        }}
      ></div>
    </div>
  );
}

export default Signal;
