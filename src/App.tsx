import React from "react";
import StopWatchWithSetTimeout from "./StopWatch/StopWatchWithSetTimeout.tsx";
import Index from "./StopWatch/Index.tsx";
import ParentComponent from "./forwardRef/ParentComponent.tsx";
import Component from "./CustomDebouncing/Component.tsx";
import Throattling from "./CustomThroattling/Throattling.tsx";
// import Index from "./StaleState/Index.tsx";

function App() {
  // return <StopWatchWithSetTimeout />;
  // return <Index />;
  // return <Index />;
  return <Component />;
  return <Throattling />;
  // return <ParentComponent />;
}

export default App;
