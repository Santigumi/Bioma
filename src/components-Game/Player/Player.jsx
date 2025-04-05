
import React, { useState, useEffect } from "react";
import { Layer, Rect } from "react-konva";
import { TILE_SIZE, PLAYER_START } from "../../utils/constants";

const Player = ({ grid }) => {
  const [position, setPosition] = useState(PLAYER_START);

  const canMove = (x, y) => {
    return grid[y] && grid[y][x] === 0; // Si es un "0", puede moverse
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      setPosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        if (e.key === "ArrowUp" && canMove(prev.x, prev.y - 1)) newY--;
        if (e.key === "ArrowDown" && canMove(prev.x, prev.y + 1)) newY++;
        if (e.key === "ArrowLeft" && canMove(prev.x - 1, prev.y)) newX--;
        if (e.key === "ArrowRight" && canMove(prev.x + 1, prev.y)) newX++;

        return { x: newX, y: newY };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Layer>
      <Rect
        x={position.x * TILE_SIZE}
        y={position.y * TILE_SIZE}
        width={TILE_SIZE}
        height={TILE_SIZE}
        fill="blue"
      />
    </Layer>
  );
};

export default Player;
