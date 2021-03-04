import React, {useState, useEffect} from "react";
import '../index.css';
import Controls from "./Control"

function Board() {
  const canvasRef = React.useRef(null);
  const [ctx,setCtx] = useState({});
  const [drawing,setDrawing] = useState(false);
  const [position,setPosition] = useState({x:0, y:0});
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0});
  const parentRef = React.useRef(null);
  const [color, setColor] = useState("#000000");

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
  },[ctx]);

  function handleMouseDown (e){
    setDrawing(true);
    setPosition({
      x: parseInt(e.clientX - canvasOffset.x),
      y: parseInt(e.clientY - canvasOffset.y),
    });
  }

  function handleMouseUp (){
    setDrawing(false);
  }

  function handleMouseMove (e){
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
    <div ref={parentRef} className="w-19/20 h-4/5 mx-auto border rounded board bg-white my-0 overflow-hidden "> {/*flex flex-auto flex-col justify-center align-center w-full relative*/}
      <Controls handleColor={handleColor}/>
      <canvas
      ref={canvasRef} 
      onMouseDown={handleMouseDown} 
      onMouseUp={handleMouseUp} 
      onMouseMove={handleMouseMove}
      />
    </div>
    </>
  );
}

export default Board;