import React, { useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import "./grid.css";
function GridComponent() {
  const [text, setText] = useState("");
  return (
    <>
      <TextField
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setTimeout(() => {
            console.log(text);
          }, 5000);
        }}
      />
      {text}
      <Grid container gap={5}>
        <Grid
          border={"1px solid black"}
          className="item"
          lg={2}
          sm={4}
          xs={12}
          md={2}
          item
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolor?
        </Grid>
        <Grid
          item
          border={"1px solid black"}
          className="item"
          lg={2}
          sm={4}
          xs={12}
          md={2}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi magni
          illum, quidem nostrum assumenda atque animi voluptate. Porro, quas
          doloremque.
        </Grid>{" "}
        <Grid
          border={"1px solid black"}
          className="item"
          lg={2}
          sm={4}
          xs={12}
          md={2}
          item
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          labore exercitationem soluta? Esse quisquam suscipit culpa eligendi
          voluptate, possimus dolore tempore doloremque ratione molestiae
          veritatis quam ducimus dignissimos fugiat recusandae.
        </Grid>{" "}
        <Grid
          border={"1px solid black"}
          className="item"
          lg={2}
          sm={4}
          xs={12}
          md={2}
          item
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
          quidem odit, blanditiis tempora inventore eos quia sed iste culpa
          delectus repudiandae placeat tenetur doloribus ex nobis deserunt eaque
          id rerum accusantium! Doloribus repellendus reiciendis, eos, at porro
          aut officiis laboriosam nisi molestias minima ut, animi accusantium
          dicta delectus inventore! Dignissimos.
        </Grid>{" "}
      </Grid>
      <Grid container gap={5}>
        <Grid
          border={"1px solid black"}
          className="item"
          lg={2}
          sm={4}
          xs={12}
          md={2}
          item
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolor?
        </Grid>
        <Grid
          item
          border={"1px solid black"}
          className="item"
          lg={2}
          sm={4}
          xs={12}
          md={2}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi magni
          illum, quidem nostrum assumenda atque animi voluptate. Porro, quas
          doloremque.
        </Grid>{" "}
        <Grid
          border={"1px solid black"}
          className="item"
          lg={2}
          sm={4}
          xs={12}
          md={2}
          item
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          labore exercitationem soluta? Esse quisquam suscipit culpa eligendi
          voluptate, possimus dolore tempore doloremque ratione molestiae
          veritatis quam ducimus dignissimos fugiat recusandae.
        </Grid>{" "}
        <Grid
          border={"1px solid black"}
          className="item"
          lg={2}
          sm={4}
          xs={12}
          md={2}
          item
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
          quidem odit, blanditiis tempora inventore eos quia sed iste culpa
          delectus repudiandae placeat tenetur doloribus ex nobis deserunt eaque
          id rerum accusantium! Doloribus repellendus reiciendis, eos, at porro
          aut officiis laboriosam nisi molestias minima ut, animi accusantium
          dicta delectus inventore! Dignissimos.
        </Grid>{" "}
      </Grid>
    </>
  );
}

export default GridComponent;
