import React from "react";

const Square = ({ sq, index, squareClicked }) => {
  return (
    <div className="square" onClick={() => squareClicked(index)}>
      <h3 className="symbol">{sq}</h3>
    </div>
  );
};

export default Square;
