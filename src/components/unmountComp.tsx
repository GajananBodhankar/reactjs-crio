import React from "react";

interface Iunmount {
  hidden: boolean;
}

class Unmount extends React.Component {
  componentWillUnmount(): void {
    console.log("Unmounted");
  }
  render() {
    return <div>I am unmount componentWillUnmount</div>;
  }
}

class Main extends React.Component<{}, Iunmount> {
  constructor(props) {
    super(props);
    this.state = { hidden: false };
  }
  render() {
    return (
      <div>
        I am main component
        <button onClick={() => this.setState({ hidden: !this.state.hidden })}>
          Press
        </button>
        {this.state.hidden && <Unmount />}
      </div>
    );
  }
}

export default Main;
