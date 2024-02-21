import React, { useEffect, useState } from "react";

function UseWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  function handleResize() {
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);
  return windowSize;
}

export default UseWindowSize;
