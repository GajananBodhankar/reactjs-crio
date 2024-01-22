import React from "react";
import { Box, Grid } from "@mui/material";
import "./grid.css";
function GridComponent() {
  return (
    <Grid container display={"flex"}>
      <Grid
        border={"1px solid black"}
        height={200}
        className="item"
        lg={2}
        sm={6}
        xs={12}
        md={4}
      >
        Hello
      </Grid>
      <Grid
        border={"1px solid black"}
        height={200}
        className="item"
        lg={2}
        sm={6}
        xs={12}
        md={4}
      >
        Hello
      </Grid>{" "}
      <Grid
        border={"1px solid black"}
        height={200}
        className="item"
        lg={2}
        sm={6}
        xs={12}
        md={4}
      >
        Hello
      </Grid>{" "}
      <Grid
        border={"1px solid black"}
        height={200}
        className="item"
        lg={2}
        md={6}
        sm={6}
        xs={12}
      >
        Hello
      </Grid>{" "}
      <Grid
        border={"1px solid black"}
        height={200}
        className="item"
        lg={2}
        md={6}
        sm={6}
        xs={12}
      >
        Hello
      </Grid>
    </Grid>
  );
}

export default GridComponent;
