import React, { useReducer, useRef } from "react";

// Controlled component are the components that are controlled by user using
// State  i.e user can control those components by manipulating state

// Uncontrolled components are directly controlled by react DOM
// i.e user can not manipulate the value of uncontrolled components by
// using state.

interface Iform {
  email: string;
  password: string;
}

function Index() {
  //  UNCONTROLLED COMPONENT make use of USEREF()
  // *****************************************************
  //   const email = useRef<HTMLInputElement>(null);
  //   const pwd = useRef<HTMLInputElement>(null);
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     console.log("email", email.current?.value, " Password", pwd.current?.value);
  //   }
  //   return (
  //     <div>
  // <form action="" onSubmit={handleSubmit}>
  //   <input type="text" name="email" ref={email} />
  //   <input type="password" name="password" ref={pwd} />
  //   <input type="submit" />
  // </form>
  //     </div>
  //   );
  // *******************************************
  // CONTROLLED COMPONENTS
//   Components are controlled by state of react 
  const initialState: Iform = {
    email: "",
    password: "",
  };
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "email": {
        return { ...state, email: action.payload };
      }
      case "password": {
        return { ...state, password: action.payload };
      }
    }
  };
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={(e) =>
          dispatch({ type: "password", payload: e.target.value })
        }
      />
      <input type="submit" />
    </form>
  );
}

export default Index;
