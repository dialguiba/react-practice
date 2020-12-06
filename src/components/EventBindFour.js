import React, { Component } from "react";

class Eventbindfour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello!",
    };
  }

  clickHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click (Event Binding - Good Performance New)</button>
      </div>
    );
  }
}

export default Eventbindfour;
