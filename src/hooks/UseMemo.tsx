import { Typography } from "@mui/material";
import React, { useMemo, useState } from "react";

function check(val) {
  console.log("hello");
  return val * val;
}

function UseMemo() {
  const [val, setVal] = useState(0);
  let memo = useMemo(() => check(val), [val]);
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
