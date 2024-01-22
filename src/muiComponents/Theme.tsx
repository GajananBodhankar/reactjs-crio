import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#2a9461",
    },
  },
});

function ThemeComponent() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Button
          type="button"
          variant="contained"
          sx={{
            ":hover": {
              backgroundColor: "black",
            },
          }}
        >
          Hello gajanan
        </Button>
        <Typography>hello</Typography>
      </Box>
    </ThemeProvider>
  );
}
export default ThemeComponent;
