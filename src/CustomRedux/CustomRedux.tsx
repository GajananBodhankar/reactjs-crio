import React, { useEffect } from "react";
import store from "./Reducers.ts";

function CustomRedux() {
  const { counter } = store.getState();
  useEffect(() => {
    store.subscribe(() => {
      let count = document.getElementById("count");
      count.innerText = store.getState().counter?.count;
    });
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          store.dispatch({ type: "Increment" });
        }}
      >
        click
      </button>
      <p id="count">{counter?.count}</p>
    </div>
  );
}

export default CustomRedux;
