import '../index.css';

function Board(props) {
  

  return (
    <>
      <div
        ref={props.parentRef}
        className="w-19/20 h-4/5 mx-auto border rounded board bg-white my-0 overflow-hidden "
      >
        {" "}
        {/*flex flex-auto flex-col justify-center align-center w-full relative*/}
        <canvas
          ref={props.canvasRef}
          onMouseDown={props.handleMouseDown}
          onMouseUp={props.handleMouseUp}
          onMouseMove={props.handleMouseMove}
        />
      </div>
    </>
  );
}

export default Board;