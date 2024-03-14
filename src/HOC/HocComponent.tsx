import React, { useState } from "react";

function HocComponent(Component: any) {
  const [state, setState] = useState<any>({
    name: "gajanan",
    age: 22,
    address: "Hyderabad",
  });
  return function HOC() {
    return <Component element={state} setElement={setState} />;
  };
}

export default HocComponent;
