import React, { Component } from "react";

class Eventhandlingtwo extends Component {
  clickHandler() {
    console.log("Clicked the button");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me (Class)</button>
      </div>
    );
  }
}

export default Eventhandlingtwo;
