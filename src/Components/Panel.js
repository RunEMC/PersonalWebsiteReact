import React from "react";

const PanelInner = props => (
  <div>
    <h3>{props.title}</h3>
  </div>
);

const Panel = props => (
  <div>
    <PanelInner title={props.title} />
    {/*
      <img
        name={"panel-bg"}
        src={"https://i.ytimg.com/vi/XKJyRfbvDLg/hqdefault.jpg"}
        alt={"test"}
      />*/}
  </div>
);

export default Panel;
