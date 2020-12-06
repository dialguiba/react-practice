import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Suscribe</button>
      </>
    );
  }
}

export default Message;
