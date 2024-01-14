import React, { Component } from "react";
import "./style.css";
import axios from "axios";
interface Iurl {
  url: string;
  index: number;
}
export default class Dog extends Component<{}, Iurl> {
  constructor(props) {
    super(props);
    this.state = { url: "", index: 0 };
  }
  fetchApiData = async (value) => {
    try {
      let res =
        await axios.get(`https://dog.ceo/api/breed/${value}/images/random
        `);
      if (res) {
        this.setState({ url: res.data.message });
      }
    } catch (e) {
      alert(`error : ${e}`);
    }
  };
  random = () => {
    let arr = ["beagle", "boxer", "dalmatian", "husky"];
    let val = arr[Math.floor(Math.random() * 4)];
    return val;
  };
  componentDidMount(): void {
    this.fetchApiData(this.random());
  }
  handleNext = () => {
    if (this.state.index + 1 > 4) {
      document.querySelector("select").selectedIndex = 0;
      this.setState({ index: 0 });
    } else {
      document.querySelector("select").selectedIndex = this.state.index + 1;
      this.setState({ index: this.state.index + 1 });
    }
    this.state.index == 0
      ? this.fetchApiData(
          document
            .querySelector("select")
            ?.selectedOptions[0].innerText.toLowerCase()
        )
      : this.fetchApiData(this.random());
  };
  render() {
    return (
      <div className="mainContainer">
        <label htmlFor="select">Select a breed : </label>
        <select
          name=""
          id="select"
          onChange={(e) => {
            this.fetchApiData(e.target.value);
            this.setState({ index: e.target.selectedIndex });
          }}
        >
          <option value="random">Random</option>
          <option value="beagle">Beagle</option>
          <option value="boxer">Boxer</option>
          <option value="dalmatian">Dalmatian</option>
          <option value="husky">Husky</option>
        </select>
        <div className="image">
          <img src={this.state.url} alt="" />
        </div>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}
