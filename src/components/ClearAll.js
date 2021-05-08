import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

function Eraser(props) {
  return (
    <div className="eraser">
      <FontAwesomeIcon
        title="erase"
        icon={faEraser}
        className="fa-icon"
        onClick={props.forceComponentUpdate}
      />
    </div>
  );
}

export default Eraser;
