import React, { Component } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
interface Inavigate {
  navigate: NavigateFunction;
}
class HomeNavigate extends Component<Inavigate> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        I am Home
        <button onClick={() => this.props.navigate("/about")}>Home</button>
      </div>
    );
  }
}

export function Home() {
  const navigate = useNavigate();
  return <HomeNavigate navigate={navigate} />;
}
