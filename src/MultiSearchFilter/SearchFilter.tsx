import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
function SearchFilter() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [resultData, setResultData] = useState([]);
  async function apiCall() {
    if (searchItem) {
      try {
        let result = await axios.get(
          `https://dummyjson.com/users/search?q=${searchItem}`
        );
        console.log(searchItem);
        if (result.data) {
          setResultData(result.data.users);
        }
      } catch (error) {
        alert(`${error}`);
      }
    } else {
      setResultData([]);
    }
  }
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    timer = setTimeout(() => (searchItem ? apiCall() : setResultData([])), 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchItem]);

  return (
    <div style={{ position: "relative" }}>
      <div className="container">
        <div
          style={{
            // maxWidth: "50%",
            width:"70%",
            overflow: "scroll",
            maxHeight: "30px",
            backgroundColor: "red",
          }}
        >
          {data.map((i, j) => (
            <span>
              {i.firstName}{" "}
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
        </div>
        <input
          type="text"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          placeholder="Enter name here..."
        />
      </div>
      <div className="searchResult">
        {resultData.map((i) => (
          <p
            onClick={() =>
              setData([
                ...data,
                { firstName: i.firstName, lastName: i.lastName },
              ])
            }
          >
            {i.firstName} {i.lastName}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SearchFilter;
