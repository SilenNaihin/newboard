import React, {useState} from "react";
import { GithubPicker } from "react-color";

export default function Announcement(props) {
    const [displayed, setDisplayed] = useState(false);
    const [color, setColor] = useState("#000000");

    function handleClick() {
      setDisplayed(true);
    }

    function handleClose() {
      setDisplayed(false);
    }

    function handleColor(color) {
      setColor(color);
    }

    function handleChange(pickerColor) {
      setColor(pickerColor.hex);
      handleColor(pickerColor.hex);
    }

  return (
    <>
      <div
        className="flex"
        style={{ backgroundColor: `${props.backgroundColor}` }}
      >
        {props.announcement}
        <button
          className={`flex justify-center items-center ml-2 text-red-600 border rounded-sm font-bold w-6 h-6`}
          onClick={() => props.removeChoice(props.announcement)}
        >
          {" "}
          x{" "}
        </button>
        <button
          className="px-2 border w-6 h-6 ml-2"
          style={{ backgroundColor: `${props.backgroundColor}` }}
          onClick={handleClick}
        ></button>
        {displayed ? (
          <div className="absolute z-10">
            <div className="fixed inset-0" onClick={handleClose} />
            <GithubPicker color={color} onChange={handleChange} />
          </div>
        ) : null}
      </div>
      <br />
    </>
  );
}