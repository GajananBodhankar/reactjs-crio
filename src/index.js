import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import Form from "./components/form.tsx";
// import Index from "./UserDashboard/index.tsx";
import Parent from "./componentHeirarchy/index.tsx";
import Index from "./lifecycle/index.tsx";
import Dog from "./DogAssignment/Dog.tsx";
import Router from "./NavigateClassComponent/Router.tsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Form />);
// root.render(<Main />);
root.render(<Router />);
// ******************************************************************
// OR

// import ReactDOM from "react-dom";

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
