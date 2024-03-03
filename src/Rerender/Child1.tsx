import React, { useEffect } from "react";

function Child1() {
  useEffect(() => {
    console.log("Child1 rerendered");
  });
  const [data, setData] = React.useState(false);
  return (
    <div>
      <button onClick={() => setData(!data)}>Change child</button>
      Child1
    </div>
  );
}

export default Child1;
