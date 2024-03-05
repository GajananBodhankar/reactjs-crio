import React, { useRef } from "react";
import ChildComponent from "./ChildComponent.tsx";

function ParentComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      I am parent
      <ChildComponent ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>CLick</button>
    </div>
  );
}

export default ParentComponent;
