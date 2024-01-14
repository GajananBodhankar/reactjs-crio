import React, { Component } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
interface Inavigate {
  navigate: NavigateFunction;
}
class AboutNavigate extends Component<Inavigate> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        I am About
        <button onClick={() => this.props.navigate("/")}>Home</button>
      </div>
    );
  }
}

export function About() {
  const navigate = useNavigate();
  return <AboutNavigate navigate={navigate} />;
}
