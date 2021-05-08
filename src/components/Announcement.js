import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { GithubPicker } from "react-color";

export default function Announcement(props) {
    const [displayed, setDisplayed] = useState(false);
    const [color, setColor] = useState("#FFF");

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
      <div className="rounded mr-4" style={{ backgroundColor: `${color}` }}>
        <div className="flex ml-1">
          {props.announcement}
          <button
            className={`flex justify-center font-bold items-center pb-0.5 ml-1 text-red-600 rounded-sm w-6 h-6`}
            onClick={() => props.removeChoice(props.announcement)}
          >
            {" "}
            x{" "}
          </button>
          <div>
            <FontAwesomeIcon
              onClick={handleClick}
              title="choose color"
              className="ml-1 cursor-pointer"
              icon={faPalette}
              onClick={handleClick}
            />
            {displayed ? (
              <div className="absolute z-10">
                <div className="fixed inset-0" onClick={handleClose} />
                <GithubPicker
                  className="cursor-pointer"
                  colors={[
                    "#FAD0C3",
                    "#FEF3BD",
                    "#C1E1C5",
                    "#BEDADC",
                    "#C4DEF6",
                    "#BED3F3",
                    "#D4C4FB",
                  ]}
                  color={color}
                  onChange={handleChange}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <br />
    </>
  );
}