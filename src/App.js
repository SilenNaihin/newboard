import React from "react";
import './index.css';
import Board from './components/Board'
import Messages from './components/Messages'
import Toolbar from './components/Toolbar'

function App() {

  return (
    <>
    <div className="flex h-screen w-screen bg-blue-300">
      <div className="w-1/3 bg-blue-300">
        <Messages/>
      </div>
      <div className="h-screen w-screen bg-yellow-300">
        <Toolbar/>
        <Board/>
      </div>
    </div>
    </>
  );
}

export default App;