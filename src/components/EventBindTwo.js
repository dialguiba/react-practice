import React, { Component } from "react";

class Eventbindtwo extends Component {
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
        <button onClick={() => this.clickHandler()}>Click (Event Binding - Bad Performance)</button>
      </div>
    );
  }
}

export default Eventbindtwo;
