import React, { useEffect } from "react";
import store from "./Reducers";

function CustomRedux() {
  const data = store.getState();
  useEffect(() => {
    console.log(data);
  });
  return <div></div>;
}

export default CustomRedux;
