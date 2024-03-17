import React, { useState } from "react";

function Hoc(Component) {
  const [name, setName] = useState("");
  return function CustomHigherComponent() {
    return <Component element={name} setElement={setName} />;
  };
}

export default Hoc;
