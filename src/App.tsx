import React, { useEffect, useState } from "react";
import Main from "./listandkeys/Main.tsx";
import EffectVSlayout from "./hooks/effectVSlayout.tsx";
function App() {
  let un = () => {
    console.log("unmounted");
  };
  const [bool, setBool] = useState(false);
  useEffect(() => {
    console.log(bool);
    return un;
  }, [bool]);
  return <EffectVSlayout />;
}
export default App;
