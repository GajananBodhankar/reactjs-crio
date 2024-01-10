import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./counter.tsx";

import ReactDOM from "react-dom/client";
import Unmount from "./unmountComp.tsx";
import Main from "./unmountComp.tsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<Main />);

// ******************************************************************
// OR

// import ReactDOM from "react-dom";

// ReactDOM.render(<Counter />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
