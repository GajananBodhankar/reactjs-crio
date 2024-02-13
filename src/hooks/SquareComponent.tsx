import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";

function SquareComponent({ val, handler, ref }) {
  useEffect(() => console.log("I am list function"));
  return (
    <div>
      <Typography>{val}</Typography>
      <Button onClick={handler}>Increment</Button>
    </div>
  );
}

export default React.memo(SquareComponent);
