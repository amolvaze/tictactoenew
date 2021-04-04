import React from "react";
import "./App.css";
import Square from "./components/square";

function App() {
  return (
    <>
      <h1>
        <center>Tic Tac Toe Game</center>
      </h1>
      <Square sq={1} index={1} />
    </>
  );
}

export default App;
