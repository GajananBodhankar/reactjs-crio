import React, { useEffect, useRef, useState } from "react";

function StopWatchWithSetTimeout() {
  const [seconds, setSeconds] = useState(0);
  const [hour, setHour] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let ref = useRef<any>(null);
  useEffect(() => {
    if (isRunning) {
      //   ref.current = setTimeout(() => {
      ref.current = setInterval(() => {
        setSeconds(seconds+1);
      }, 1000);
      if (seconds > 59) {
        setHour((prev) => prev + 1);
        setSeconds(0);
      }
    }

    return () => {
      clearTimeout(ref.current);
    };
  }, [isRunning]);
  return (
    <div>
      <h4>Stop Watch</h4>
      <p>
        {hour} - {seconds} dsadsds
      </p>

      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
          setSeconds(0);
          setHour(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default StopWatchWithSetTimeout;
