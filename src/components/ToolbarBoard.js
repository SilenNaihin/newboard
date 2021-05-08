import { useForceUpdate } from "./hooks/useForceUpdate";
import Board from "./components/Board";
import Toolbar from "./components/Toolbar";

export default function ToolbarBoard(props) {
  const forceUpdate = useForceUpdate();

  function forceComponentUpdate() {
    forceUpdate();
  }

  return (
    <div className="h-screen w-screen bg-yellow-100">
      <Toolbar
        handleColor={props.handleColor}
        forceComponentUpdate={forceComponentUpdate}
      />
      <Board
        parentRef={props.parentRef}
        canvasRef={props.canvasRef}
        handleMouseDown={props.handleMouseDown}
        handleMouseUp={props.handleMouseUp}
        handleMouseMove={props.handleMouseMove}
      />
    </div>
  );
}