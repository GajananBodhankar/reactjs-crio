import React, { Component } from "react";
import "./index.css";
import { fetchApiData } from "./fetchData";
interface Iindex {
  name: string;
  email: string;
  source: string;
}

export default class Index extends Component<{}, Iindex> {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      source:
        "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
    };
  }
  handleClick = async (value) => {
    let res = await fetchApiData(value);
    if (res?.data) {
      this.setState({
        name: res.data.first_name,
        email: res.data.email,
        source: res.data.avatar,
      });
    } else {
      alert("Invalid user");
      this.setState({
        name: "",
        email: "",
        source:
          "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
      });
    }
  };
  render() {
    return (
      <div className="mainContainer">
        <div className="buttons">
          <button onClick={() => this.handleClick(1)}>1</button>
          <button onClick={() => this.handleClick(2)}>2</button>
          <button onClick={() => this.handleClick(3)}>3</button>
          <button onClick={() => this.handleClick(100)}>100</button>
        </div>
        <ul className="data">
          <li>Email : {this.state.email}</li>
          <li>Name : {this.state.name}</li>
        </ul>
        <img src={this.state.source} alt="" />
      </div>
    );
  }
}
