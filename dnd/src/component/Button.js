import React from "react";

function Button(props) {
  return (
    <>
      <button data-test="addBtn" onClick={props.onButtonClick}>
        Add
      </button>
    </>
  );
}

export default Button;
