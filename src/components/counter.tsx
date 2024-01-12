import React from "react";
import "../App.css";
interface Icounter {
  count: number;
}

class Counter extends React.Component<{ diff: number }, Icounter> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  //   The below functions has to be arrow functions because they inherit this from parent unlike normal function
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  incByNum = () => {
    this.setState({ count: this.state.count + +this.props.diff });
  };
  render() {
    return (
      <div className="mainContainer">
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.increment}>+ 1</button>
          <button onClick={this.incByNum}>{this.props.diff}</button>
          <button onClick={this.decrement}>- 1</button>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <Counter diff={10} />;
  }
}

export default App;
