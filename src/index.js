import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import Form from "./components/form.tsx";
// import Index from "./UserDashboard/index.tsx";
import Appoint from "./AppointmentBooking/appoint.tsx";
import App from "./App.tsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Form />);
// root.render(<Main />);
// root.render(<Router />);
// root.render(<CustomHook />);
// let element = React.createElement(
//   "div",
//   { className: "mainContainer" },
//   React.createElement("p", { className: "mainContainer" }, "I am a p tag")
// );
root.render(<App />);
// root.render(element);
// root.render(<Appoint />);
// ******************************************************************
// OR

// import ReactDOM from "react-dom";

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
