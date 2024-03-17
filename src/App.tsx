import React, { useCallback, useEffect, useRef, useState } from "react";
import IndexOne from "./InterviewQuestions/IndexOne.tsx";
import Parent from "./Rerender/Parent.tsx";
import Index from "./StopWatch/Index.tsx";
import Signal from "./StopWatch/Signal.tsx";
import Calci from "./Calculator/Calci.tsx";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      {/* return <Index />;
    return <Signal />; */}
      <Calci />
    </StyledEngineProvider>
  );
}

export default App;
