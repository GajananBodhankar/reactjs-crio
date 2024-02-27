import React, { useState } from "react";

function Names(props: any) {
  let [checked, setChecked] = useState(false);
  let handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div>
      {props.name}
      <input type="checkbox" onChange={handleChange} checked={checked} />
    </div>
  );
}

export default Names;
