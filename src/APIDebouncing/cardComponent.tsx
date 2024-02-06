import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
function CardComponent() {
  const [addresses, setAddresses] = useState({ all: [], selected: "" });
  return (
    <Box padding={1}>
      <Grid container>
        <Grid
          item
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6" color="initial" fontWeight={""} >
            Lorem ipsum dolor
          </Typography>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardComponent;
