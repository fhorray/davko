import React from "react";

const PrimaryButton = ({ formValue, ...props }) => {
  return (
    <a href="#" className="primary-btn" onClick={formValue}>
      {props.title}
    </a>
  );
};

export default PrimaryButton;
