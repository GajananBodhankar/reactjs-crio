import React from "react";
function CustomDebounce(callback, time) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, time);
  };
}

function Component() {
  function handleChange() {
    console.log("hello");
  }
  let x = CustomDebounce(handleChange, 500);
  return (
    <div>
      <input
        type="text"
        onChange={() => {
          x(10, 20);
        }}
      />
    </div>
  );
}

export default Component;
