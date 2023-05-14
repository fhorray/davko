import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="text">
      <h2>{props.title}</h2>
      <p>{props.hasDescription ? props.description : null}</p>
    </div>
  );
};

export default SectionTitle;
