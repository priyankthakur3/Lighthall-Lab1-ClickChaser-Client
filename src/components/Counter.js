import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount = () => {
    let localCounter = localStorage.getItem("counter");
    if (localCounter) this.setState({ counter: parseInt(localCounter) });
  };

  componentDidUpdate = () => {
    localStorage.setItem("counter", this.state.counter);
  };

  onClick = () => {
    this.setState((priorState) => {
      return {
        counter: priorState.counter + 1,
      };
    });
  };

  resetCounter = () => {
    localStorage.removeItem("counter");
    this.setState(() => {
      return { counter: 0 };
    });
  };

  render = () => {
    let displayString;
    if (this.state.counter > 0) displayString = "Click's";
    else displayString = "Click";
    return (
      <div className="Inner-element">
        <h1>Chasing the Clicks</h1>
        <p>Hit that "Click Me" and see your Counts Soar!</p>

        <p>
          {displayString}: {this.state.counter}
        </p>
        <div className="button-container">
          <button className="click" onClick={this.onClick}>
            Click me!
          </button>
          <button className="reset" onClick={this.resetCounter}>
            Reset!
          </button>
        </div>
      </div>
    );
  };
}

export default Counter;
