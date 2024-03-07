import React, { useEffect, useState } from "react";

function BatchingUseEffect() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log('effect')
    let val = setInterval(() => {
    //   setNum((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(val);
    };
  }, []);
  return <div>the value of number is {num} dahskdbhakbsk</div>;
}

export default BatchingUseEffect;
