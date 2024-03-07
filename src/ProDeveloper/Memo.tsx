import React, { useMemo, useState } from "react";

function Memo() {
  const [text, setText] = useState(0);
  let result = useMemo(() => expensiveCal(text), [text]);
  function expensiveCal(num) {
    console.log("called expensive function")
    return num * num;
  }
  console.log("rerendered");
  return (
    <div>
      {text}
      <button onClick={() => setText(text)}>Inc</button>
      <span>total is {result}</span>
    </div>
  );
}

export default Memo;
