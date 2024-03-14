import React, { useCallback, useEffect, useRef, useState } from "react";

function IndexOne() {
  const [val, setVal] = useState([false, false, false, false]);
  const [selectAll, setSelect] = useState(false);
  function Check(val) {
    if (val.every((i) => i === true)) {
      setSelect(true);
    } else {
      setSelect(false);
    }
  }
  function SetCheck(e, index) {
    if (e.target.checked) {
      var temp = [...val];
      temp[index] = true;
      setVal(temp);
    } else {
      var temp = [...val];
      temp[index] = false;
      setVal(temp);
    }
    Check(temp);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 150,
        justifyContent: "center",
        gap: 10,
      }}
    >
      <div>
        <label htmlFor="selectAll">SelectAll</label>
        <input
          type="checkbox"
          name=""
          id="selectAll"
          checked={selectAll}
          onChange={(e) => {
            if (e.target.checked) {
              setSelect(true);
              setVal([true, true, true, true]);
            } else {
              setSelect(false);
              setVal([false, false, false, false]);
            }
          }}
        />
      </div>
      <div>
        <label htmlFor="1">One</label>
        <input
          type="checkbox"
          name=""
          id="1"
          checked={val[0]}
          onChange={(e) => {
            SetCheck(e, 0);
          }}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="2">Two</label>
        <input
          type="checkbox"
          name=""
          id="2"
          checked={val[1]}
          onChange={(e) => {
            SetCheck(e, 1);
          }}
        />
      </div>
      <div>
        <label htmlFor="3">Three</label>

        <input
          type="checkbox"
          name=""
          id="3"
          checked={val[2]}
          onChange={(e) => {
            SetCheck(e, 2);
          }}
        />
      </div>
      <div>
        <label htmlFor="4"> Four</label>

        <input
          type="checkbox"
          name=""
          id="4"
          checked={val[3]}
          onChange={(e) => {
            SetCheck(e, 3);
          }}
        />
      </div>
    </div>
  );
}

export default IndexOne;
