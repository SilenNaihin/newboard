import React from "react";
import '../index.css';
import Color from "./Color"
import Eraser from "./Eraser"

function Controls(props) {
  return <div className="controls flex w-auto">
    <Color handleColor={props.handleColor}/>
    <Eraser handleColor={props.handleColor} />
  </div>;
}

export default Controls;