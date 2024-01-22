import React, { useEffect, useState } from "react";
import Main from "./listandkeys/Main.tsx";
import EffectVSlayout from "./hooks/effectVSlayout.tsx";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <EffectVSlayout />
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
export default App;
