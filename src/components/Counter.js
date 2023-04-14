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
      return { counter: priorState.counter + 1 };
    });
  };

  resetCounter = () => {
    localStorage.removeItem("counter");
    this.setState(() => {
      return { counter: 0 };
    });
  };
  render = () => {
    return (
      <div className="Inner-element">
        <h1>Click Counter!!</h1>
        <p>Click on bellow Counter to get Click Counts!</p>
        <p>Clicks: {this.state.counter}</p>
        <button onClick={this.onClick}>Click me!</button>
        <br />
        <button onClick={this.resetCounter}>Reset!</button>
      </div>
    );
  };
}

export default Counter;
