import React, { useState } from "react";
import Names from "./Names.tsx";
import "./style.css";
function Main() {
  let [data, setData] = useState([
    { id: "501", name: "Emily" },
    { id: "502", name: "James" },
    { id: "503", name: "Sophia" },
    { id: "504", name: "Alexander" },
    { id: "505", name: "Bruce" },
  ]);
  function handleShuffle() {
    setData([...data.sort(() => Math.random() - 0.5)]);
  }
  return (
    <div className="container">
      {data.map((item, index) => (
        <Names name={item.name} key={index} />
      ))}
      <button onClick={handleShuffle}>Shuffle</button>
    </div>
  );
}

export default Main;
