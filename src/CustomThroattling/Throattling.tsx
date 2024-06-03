import React from "react";
function CustomThroattling(callback, time) {
  let timer;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        callback();
        timer = undefined;
      }, time);
    }
  };
}
function Throattling() {
  function handleChange() {
    console.log("changed");
  }
  let callback = CustomThroattling(handleChange, 500);
  return (
    <div>
      <input type="text" onChange={callback} />
    </div>
  );
}

export default Throattling;
