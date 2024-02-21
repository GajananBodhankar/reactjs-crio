import React, { createContext, useState } from "react";
import Child from "./Child.tsx";
import GrandChild from "./GrandChild.tsx";
import UseWindowSize from "./useWindowSize.tsx";

export const Context = createContext(null);

function Parent() {
  let [count, setCount] = useState(0);
  const windowSize = UseWindowSize();
  return (
    <Context.Provider value={{ count, setCount }}>
      <p>I am parent, count ={count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child />
      <GrandChild />
      <p>height : {windowSize.height}</p>
      <p>width : {windowSize.width}</p>
    </Context.Provider>
  );
}

export default Parent;
