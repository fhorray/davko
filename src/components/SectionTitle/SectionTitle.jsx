import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="text">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default SectionTitle;
