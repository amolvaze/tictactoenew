import React from "react";
import Square from "./square";

const Board = ({ squareClicked, values }) => {
  return (
    <div className="board">
      {values.map((sq, index) => {
        return (
          <Square
            key={index}
            sq={sq}
            squareClicked={squareClicked}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Board;
