// Code EyesOnMe Component Here
import React from "react";

function EyeOnMe() {
  function handleFocuses() {
    console.log("Good!");
  }
  function handleBlaring() {
    console.log("Hey! Eyes on me!");
  }
  return (
    <div>
      <button onFocus={handleFocuses} onBlur={handleBlaring}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyeOnMe;
