import React, { useState } from "react";
import "./style.css";
function SearchFilter() {
  const [data, setData] = useState([10]);
  const [searchItem, setSearchItem] = useState("");
  return (
    <div>
      <div className="container">
        {data.map((i, j) => (
          <span>
            {i}{" "}
            <span
              onClick={() => {
                let temp = [...data];
                temp.splice(j, 1);
                setData(temp);
              }}
            >
              X
            </span>{" "}
          </span>
        ))}
        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Enter name here..."
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              setData([...data, searchItem]);
              setSearchItem("");
            }
          }}
        />
      </div>
    </div>
  );
}

export default SearchFilter;
