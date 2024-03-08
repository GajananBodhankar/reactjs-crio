import React, { Component } from "react";

interface Icount {
  count: number;
}

export default class App extends Component<{}, Icount> {
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
    console.log("Component updated", prevState.count);
  }
  componentWillUnmount(): void {
    console.log("Component unmounted");
  }
  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<Icount>,
    nextContext: any
  ): boolean {
    if (nextState.count % 2 == 0) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div>
        <p>This is count {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
