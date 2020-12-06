import React from "react";

function Eventhandling() {
  function clickHandler() {
    console.log("Button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click (functional)</button>
    </div>
  );
}

export default Eventhandling;
