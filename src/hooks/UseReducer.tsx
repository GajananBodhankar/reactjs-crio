import React, { useReducer } from "react";

interface Istate {
  name: string;
  age: number;
  address: string;
}

const initialState: Istate = {
  name: "",
  age: 0,
  address: "",
};

const reducerFun = (state, action) => {
  switch (action.type) {
    case "name": {
      return {
        ...state,
        name: action.payload,
      };
    }
  }
};
function UseReducer() {
  const [state, setState] = useReducer(reducerFun, initialState);
  return (
    <div>
      <input
        type="text"
        value={state.name}
        name=""
        id=""
        onChange={(e) => setState({ type: "name", payload: e.target.value })}
      />
      <span>{state.name}</span>
    </div>
  );
}

export default UseReducer;
