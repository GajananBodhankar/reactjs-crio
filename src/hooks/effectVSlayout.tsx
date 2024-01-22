import React, { useEffect, useLayoutEffect, useState } from "react";

function EffectVSlayout() {
  const [count, SetCount] = useState(0);
  function unmount() {
    console.log("unmounted useEffect");
  }
  //   Here, count is updated, screen is painted and the useEffect is called
  useEffect(() => {
    console.log("Count from useEffect");
    return unmount;
  }, [count]);
  //   UselayoutEffect is called before the browser paints the screen,
  // Count is updated, useLayoutEffect is called and then screen is painted
  useLayoutEffect(() => {
    console.log("Count from useLayoutEffect");
  }, [count]);
  return (
    <div>
      <button onClick={() => SetCount(count + 1)}>Click</button>
    </div>
  );
}

export default EffectVSlayout;
