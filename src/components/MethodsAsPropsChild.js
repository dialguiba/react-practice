import React from "react";

function Methodsaspropschild(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default Methodsaspropschild;
