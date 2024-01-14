import React from "react";

interface Icounter {
  count: number;
}

class Parent extends React.Component<{}, Icounter> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    console.log("rerenderes")

    return (
      <div>
        Parent
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count :{this.state.count}
        </button>
        <Child1 />
        <Child2 />
      </div>
    );
  }
}

class Child1 extends React.Component<{}, Icounter> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        Child1
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count :{this.state.count}
        </button>
      </div>
    );
  }
}
class Child2 extends React.Component<{}, Icounter> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        Child2
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count :{this.state.count}
        </button>
      </div>
    );
  }
}

export default Parent;
