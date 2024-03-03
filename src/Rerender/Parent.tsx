import React, { useEffect, useState } from "react";
import Child1 from "./Child1.tsx";
import Child2 from "./Child2.tsx";
import { Button } from "@mui/material";

function Parent() {
  const [name, setName] = useState(false);
  useEffect(() => {
    console.log("parent rerendered");
  });
  return (
    <div>
      parent
      <Button onClick={() => setName(!name)}>Change state</Button>
      <Child1 />
      <Child2 />
    </div>
  );
}

export default Parent;
