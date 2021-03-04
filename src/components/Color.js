import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { ChromePicker } from "react-color";
import '../index.css';

function Color(props) {
    const [displayed, setDisplayed] = useState(false);
    const [color, setColor] = useState("#000000");

    function handleClick() {
        setDisplayed(true);
    }

    function handleClose() {
        setDisplayed(false);
    }

    function handleChange(pickerColor) {
        setColor(pickerColor.hex);
        props.handleColor(pickerColor.hex);
      }

    return (
      <div className="color">
        <FontAwesomeIcon
          onClick={handleClick}
          title="choose color"
          className="fa-icon"
          icon={faPalette}
        />
        {displayed ? (
            <div className="absolute z-10">
            <div className="fixed inset-0" onClick={handleClose}/>
            <ChromePicker color={color} onChange={handleChange}/>
          </div>
        ) : null}
      </div>
    );
  }
  
  export default Color;