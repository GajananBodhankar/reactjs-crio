import React from "react";
import StopWatchWithSetTimeout from "./StopWatch/StopWatchWithSetTimeout.tsx";
// import Index from "./StopWatch/Index.tsx";
import ParentComponent from "./forwardRef/ParentComponent.tsx";
import Component from "./CustomDebouncing/Component.tsx";
import Throattling from "./CustomThroattling/Throattling.tsx";
import SearchFilter from "./MultiSearchFilter/SearchFilter.tsx";
import MainContainer from "./Modal/MainContainer.tsx";
import CustomRedux from "./CustomRedux/CustomRedux.tsx";
// import Index from "./StaleState/Index.tsx";

function App() {
  // return <StopWatchWithSetTimeout />;
  // return <Index />;
  // return <Index />;
  // return <Component />;
  // return <Throattling />;
  // return <ParentComponent />;
  // return <SearchFilter />;
  // return <MainContainer/>

  return <CustomRedux/>
}

export default App;
