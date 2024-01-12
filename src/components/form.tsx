import React, { Component } from "react";

interface IForm {
  value: string;
}

export default class Form extends Component<{}, IForm> {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior
    alert(this.state.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" value="Submit" />
        </form>
        <p>The Value is : {this.state.value}</p>
      </div>
    );
  }
}
