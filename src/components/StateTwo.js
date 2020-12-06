import React, { Component } from "react";

class CounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  incrementByFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={() => this.incrementByFive()}>CountByFive</button>
      </>
    );
  }
}

export default CounterTwo;
