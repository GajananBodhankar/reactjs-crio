// import React from "react";

// import VideosComponent from "./APIDebouncing/Videos.tsx";

// function App() {
//   return <VideosComponent />;
// }
// export default App;

import { Delete } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
function CardComponent() {
  const [addresses, setAddresses] = useState({ all: [], selected: "" });
  return (
    <Box padding={1} marginTop={1}>
      <Grid container>
        <Grid item display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h6" color="initial" fontWeight={""}>
            Lorem ipsum dolor
          </Typography>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor
          </Typography>
        </Grid>
        <TextField multiline minRows={3} maxRows={5} />

        <Grid container gap={1}>
          {addresses.all.map((i) => {
            return (
              <Grid
                item
                display={"flex"}
                onClick={()=>alert('hi')}
                sm={12}
                justifyContent={"space-between"}
                border={0.1}
                borderRadius={1}
                sx={{ borderWidth: "thin" }}
                paddingX={1.5}
                paddingY={2}
                borderColor={"#bababd"}
              >
                <Typography alignSelf={"center"}>{i}</Typography>
                <Button>
                  <Delete />
                  Delete
                </Button>
              </Grid>
            );
          })}
        </Grid>
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
