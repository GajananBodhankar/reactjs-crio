import React, { useState } from "react";
import Superhero from "./listandkeys/superhero.tsx";

function App() {
  let [data, setData] = useState([
    { id: "a2jdkjd", name: "Winter Soldier" },
    { id: "jdkdjk1", name: "Iron Man" },
    { id: "b3dkdj2", name: "Black Widow" },
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
