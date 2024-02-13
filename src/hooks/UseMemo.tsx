import { Typography } from "@mui/material";
import React, { useMemo, useState } from "react";

function memoised(fn) {
  let cache = {};
  return function (input) {
    if (cache[input]) {
      return cache[input];
    } else {
      cache[input] = fn(input);
      return cache[input];
    }
  };
}
function check(val) {
  console.log("hello");
  return val * val;
}

function UseMemo() {
  const [val, setVal] = useState(0);
  let memo = memoised(check)(val);
  return (
    <div>
      <Typography>
        {memo},{val}
      </Typography>
      <button onClick={() => setVal(val + 1)}>Click</button>
      <button onClick={() => setVal(val - 1)}>click</button>
    </div>
  );
}

export default UseMemo;
