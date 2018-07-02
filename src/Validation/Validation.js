import React from "react";

const Validation = props => {
  let ValidationMessage = "Text long enough";

  if (props.inputLength <= 5) {
    ValidationMessage = "Text too short";
  }

  return (
    <div>
      <p>{ValidationMessage}</p>
    </div>
  );
};

export default Validation;
