import React, { Component } from "react";

class Eventbindthree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Goodbye!",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click (Event Binding - Good Performance)</button>
      </div>
    );
  }
}

export default Eventbindthree;
