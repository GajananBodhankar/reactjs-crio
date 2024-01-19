import React, { useState } from "react";
import Superhero from "./listandkeys/superhero.tsx";

function App() {
  let [data, setData] = useState([
    { id: "1", name: "Winter Soldier" },
    { id: "2", name: "Iron Man" },
    { id: "3", name: "Black Widow" },
    { id: 10, name: "max" },
    { id: 11, name: "john" },
  ]);
  return (
    <div>
      {data.map((i, j) => (
        <Superhero name={i.name} key={i.id} />
      ))}
      <button
        onClick={() => {
          setData([...data.sort(() => Math.random() - 0.5)]);
        }}
      >
        {" "}
        Shuffle
      </button>
    </div>
  );
}

export default App;
