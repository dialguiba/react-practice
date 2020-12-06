import React, { Component } from "react";

class Eventbind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
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
        <button onClick={this.clickHandler.bind(this)}>Click (Event Binding - Bad Performance)</button>
      </div>
    );
  }
}

export default Eventbind;
