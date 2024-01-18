import React, { useState } from "react";

function Superhero(props) {
  let [checked, setChecked] = useState(false);
  let handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div>
      {props.name}
      <input type="checkbox" onChange={handleChange} />
    </div>
  );
}

export default Superhero;
