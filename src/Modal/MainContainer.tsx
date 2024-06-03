import React, { useState } from "react";
import Modal from "./Modal.tsx";

function MainContainer() {
  const [bool, setBool] = useState(false);
  return (
    <div>
      <button onClick={() => setBool((prev) => !prev)}>Open</button>
      {bool && <Modal setBool={setBool} />}
    </div>
  );
}

export default MainContainer;
