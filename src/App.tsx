// import React from "react";

// import VideosComponent from "./APIDebouncing/Videos.tsx";

// function App() {
//   return <VideosComponent />;
// }
// export default App;

import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
function CardComponent() {
  const [addresses, setAddresses] = useState({ all: [], selected: "" });
  return (
    <Box padding={1}>
      <Grid container>
        <Grid item display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h6" color="initial" fontWeight={""}>
            Lorem ipsum dolor
          </Typography>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor
          </Typography>
        </Grid>
        {addresses.all.map((i) => {
          return <Typography>{i} </Typography>;
        })}
      </Grid>
      <Button
        onClick={() => {
          setAddresses({ all: [10, 20, 30, 40], selected: "1" });
        }}
      >
        Click
      </Button>
    </Box>
  );
}

export default CardComponent;
