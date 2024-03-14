import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Parent() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <Box>
      <Button onClick={() => navigate("/child")}>Go to child</Button>
      <Outlet context={{ count, setCount }} />
    </Box>
  );
}

export default Parent;
