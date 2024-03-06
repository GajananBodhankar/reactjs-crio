import React, { Component } from "react";

interface Icount {
  count: number;
}

export default class ClassComponent extends Component<{}, Icount> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount(): void {
    console.log("Component Mounted");
  }
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<Icount>
  ): void {
    console.log("COmponent updated", prevState.count);
  }
  componentWillUnmount(): void {
    alert("component unmounted");
  }
  
  render() {
    return (
      <div>
        I am count and my value is{this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
