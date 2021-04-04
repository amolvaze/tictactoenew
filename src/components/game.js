import React, { useState } from "react";
import Board from "./board";

const Game = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playerturn, setPlayerTurn] = useState("X");
  const [gameEnded, setGameEnded] = useState(false);

  const showAlert = (message, className) => {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const showmsg = document.querySelector("#showmsg");
    container.insertBefore(div, showmsg);

    setTimeout(() => document.querySelector(".alert").remove(), 1000);
  };
  const checkWinner = () => {
    let winning_combos = [
      [0, 1, 2], // rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonal
      [2, 4, 6],
    ];

    for (let i = 0; i < winning_combos.length; i++) {
      let winning_row = winning_combos[i];
      let p1 = winning_row[0];
      let p2 = winning_row[1];
      let p3 = winning_row[2];
      if (
        board[p1] !== "" &&
        board[p1] === board[p2] &&
        board[p2] === board[p3]
      ) {
        showAlert(`winner! player ${playerturn} has won the game! `, "success");
        setGameEnded(true);
        
        return;
      }
    }
  };
  const squareClicked = (index) => {
    let pturn = playerturn;
    let b = board;
    board[index] = pturn;
    localStorage.setItem("boardvalue", JSON.stringify([...board, board]));
    checkWinner();

    let counter = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== "") {
        counter += 1;
      }
    }

    if (board.length === counter) {
      setGameEnded(true);
      showAlert("No one has won the game! ", "danger");
    }

    pturn = pturn === "X" ? "0" : "X";
    setPlayerTurn(pturn);
    setBoard(b);
  };

  return (
    <div className="container">
      <button
        className="resetbtn"
        // disabled={!gameEnded}
        onClick={() => {
          setPlayerTurn("X");
          setBoard(["", "", "", "", "", "", "", "", ""]);
          setGameEnded(false);
          localStorage.removeItem("boardvalue");
        }}
      >
        ResetGame
      </button>{" "}
      <br /> <br />
      <Board squareClicked={squareClicked} values={board} />
    </div>
  );
};
export default Game;
