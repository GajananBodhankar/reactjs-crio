import React, { forwardRef } from "react";

function ChildComponent(props, ref) {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
}

export default forwardRef(ChildComponent);
