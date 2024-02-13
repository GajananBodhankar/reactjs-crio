import { Typography } from "@mui/material";
import React from "react";

function MyListcallback({ val, handler, ref }) {
  return (
    <div>
      <Typography>{val}</Typography>
    </div>
  );
}

export default MyListcallback;
