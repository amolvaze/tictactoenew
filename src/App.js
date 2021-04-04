import React from "react";
import "./App.css";
import Board from "./components/board";

function App() {
  return (
    <>
      <h1>
        <center>Tic Tac Toe Game</center>
      </h1>
      <Board values={[1, 2, 3]} />
    </>
  );
}

export default App;
