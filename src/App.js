import React, { useState, useEffect } from "react";
import "./index.css";
import Board from "./components/Board";
import Messages from "./components/Messages";
import Toolbar from "./components/Toolbar";
import { useForceUpdate } from './hooks/useForceUpdate'

function App() {
  const canvasRef = React.useRef(null);
  const [ctx, setCtx] = useState({});
  const [drawing, setDrawing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  const parentRef = React.useRef(null);
  const [color, setColor] = useState("#000000");

  const forceUpdate = useForceUpdate();

  function forceComponentUpdate() {
    forceUpdate();
  }

  useEffect(() => {
    let canv = canvasRef.current;
    canv.width = parentRef.current.offsetWidth;
    canv.height = parentRef.current.offsetHeight;

    let canvCtx = canv.getContext("2d");
    canvCtx.lineJoin = "round";
    canvCtx.lineCap = "round";
    canvCtx.lineWidth = 5;
    setCtx(canvCtx);

    let offset = canv.getBoundingClientRect();
    setCanvasOffset({ x: parseInt(offset.left), y: parseInt(offset.top) });
  }, [ctx]);

  function handleMouseDown(e) {
    setDrawing(true);
    setPosition({
      x: parseInt(e.clientX - canvasOffset.x),
      y: parseInt(e.clientY - canvasOffset.y),
    });
  }

  function handleMouseUp() {
    setDrawing(false);
  }

  function handleMouseMove(e) {
    let mousex = e.clientX - canvasOffset.x;
    let mousey = e.clientY - canvasOffset.y;
    if (drawing) {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(position.x, position.y);
      ctx.lineTo(mousex, mousey);
      ctx.stroke();
    }
    setPosition({ x: mousex, y: mousey });
  }

  function handleColor(color) {
    setColor(color);
  }

  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="w-1/3">
          <Messages />
        </div>
        <div className="h-screen w-screen bg-yellow-100">
          <Toolbar
            handleColor={handleColor}
            forceComponentUpdate={forceComponentUpdate}
          />
          <Board
            parentRef={parentRef}
            canvasRef={canvasRef}
            handleMouseDown={handleMouseDown}
            handleMouseUp={handleMouseUp}
            handleMouseMove={handleMouseMove}
            forceComponentUpdate={forceComponentUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
