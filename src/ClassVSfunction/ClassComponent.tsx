import React from "react";
import { Component, ReactNode } from "react";
interface Icount {
  count: number;
}
class ClassComponent extends Component<{}, Icount> {
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
    console.log("Component updated with", prevState.count);
  }
  componentWillUnmount(): void {
    console.log("Component Unmounted");
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
export default ClassComponent;
