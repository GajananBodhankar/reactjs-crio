import React, { useCallback, useEffect, useRef, useState } from "react";
import IndexOne from "./InterviewQuestions/IndexOne.tsx";
import Parent from "./Rerender/Parent.tsx";
import Index from "./StopWatch/Index.tsx";
import Signal from "./StopWatch/Signal.tsx";
import Calci from "./Calculator/Calci.tsx";
import { StyledEngineProvider } from "@mui/material";
import Wrapper from "./HOC/Wrapper.tsx";

interface Ireducer {
  name: string;
  age: number;
}

interface Idata {
  data: Ireducer[];
}
const data: Idata = {
  data: [],
};

function ReducerFun(state,action){
  switch(action.type){
    case 'push':{
      return [...state,action.payload]
    }
  }
}

function App() {
  return (
    <StyledEngineProvider injectFirst>
      {/* return <Index />;
    return <Signal />; */}
      {/* <Calci /> */}
      <Wrapper />
    </StyledEngineProvider>
  );
}

export default App;
