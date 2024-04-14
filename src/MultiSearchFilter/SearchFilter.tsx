import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
function SearchFilter() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [resultData, setResultData] = useState([]);
  async function apiCall(api) {
    if (searchItem) {
      try {
        let result = await axios.get(api);
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
    timer = setTimeout(
      () =>
        searchItem
          ? apiCall(`https://dummyjson.com/users/search?q=${searchItem}`)
          : setResultData([]),
      400
    );

    return () => {
      clearTimeout(timer);
    };
  }, [searchItem]);

  return (
    <div style={{ position: "relative" }}>
      <div className="container">
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
