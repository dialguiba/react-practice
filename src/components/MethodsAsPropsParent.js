import React, { Component } from "react";
import Methodsaspropschild from "./MethodsAsPropsChild";

class Methodsaspropsparent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <Methodsaspropschild greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default Methodsaspropsparent;
