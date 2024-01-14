import React, { Component } from "react";
interface Icounter {
  count: number;
}
export default class Index extends Component<{}, Icounter> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount(): void {
    console.log("Mounted");
  }
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<Icounter>,
    snapshot?: any
  ): void {
    console.log(prevState, this.state);
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<Icounter>,
    nextContext: any
  ): boolean {
    console.log("should",nextState);
    return true;
  }
  render() {
    console.log("rerender");
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count :{this.state.count}
        </button>
      </div>
    );
  }
}
