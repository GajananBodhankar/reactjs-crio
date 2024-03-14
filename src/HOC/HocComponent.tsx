import React, { useState } from "react";

function HocComponent(Component) {
  const [state, setState] = useState<Object>({
    name: "gajanan",
    age: 22,
    address: "Hyderabad",
  });
  return <Component element={state} />;
}

export default HocComponent;
