import React from "react";

function Panel(props) {

  return (
    <div>
      <img
        name={"panel-bg"}
        src={""}
        alt={"test"}
      />
      <h3>{props.title}</h3>
    </div>
  );
};

export default Panel;
