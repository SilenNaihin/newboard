import React from "react";
import Controls from "./Control";

function Toolbar(props) {

  return (
    <div className="toolbar shadow-lg bg-white w-19/20 mx-auto h-1/10 mb-4">
      <Controls handleColor={props.handleColor} />
    </div>
  );
}

export default Toolbar;