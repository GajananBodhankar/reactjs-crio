import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
function Index() {
  const [bool, setBool] = useState(false);
  const [input, setInput] = useState("");
  const ref = useRef(0);
  async function ApiCallOne(e) {
    try {
      let result = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${+e}`
      );
      if (result.status === 200) {
        setBool(true);
      }
    } catch (error) {
      setBool(false);
      alert(error);
    }
  }
  async function ApiCallTwo() {
    try {
      let result = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${+input}`
      );
      console.log("two", result.data);
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    ApiCallOne(0);
  }, []);
  useEffect(() => {
    if (bool) {
      ApiCallTwo();
    }
  }, [bool]);
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setInput(e.target.value);
          ApiCallOne(e.target.value);
        }}
      />
      <button
        onClick={() => {
          ref.current = ref.current + 1;
          console.log(ref.current);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Index;
