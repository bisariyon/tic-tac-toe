import React, { useState, useEffect } from "react";
import Square from "./Square";

function Grid() {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (count === 9 && !isWinner(grid)) {
      setGameOver(true);
    }
  }, [count, grid]);

  const clickHandler = (i) => {
    if (isWinner(grid)) return;

    if (gameOver || grid[i] !== null) return;
    const gridCopy = [...grid];
    gridCopy[i] = xTurn ? "X" : "O";
    setGrid(gridCopy);

    setXTurn(!xTurn);
    setCount(count + 1);
  };

  const isWinner = (grid) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }
    return null;
  };

  return (
    <div className="">
      <h1 className="text-4xl sm:text-6xl text-blue-500 hover:text-green-500 font-bold my-3">
        Tic Tac Toe
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3 mb-8"
        onClick={() => {
          setGrid(Array(9).fill(null));
          setCount(0);
          setGameOver(false);
          setXTurn(true);
        }}
      >
        Play Again
      </button>

      <div className="grid grid-cols-3 gap-0">
        {grid.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => clickHandler(index)}
          />
        ))}
      </div>
      {gameOver && !isWinner(grid) && count === 9 && (
        <h1 className="text-3xl text-blue-500 my-3 font-bold">It's a draw!</h1>
      )}

      {isWinner(grid) && (
        <h1
          className={`${
            isWinner(grid) === "X" ? "text-lime-400" : "text-amber-400"
          } text-3xl my-3 font-bold`}
        >
          {isWinner(grid)} won the game
        </h1>
      )}
    </div>
  );
}

export default Grid;
