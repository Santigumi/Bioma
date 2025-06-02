import React, { useState, useEffect } from "react";
import { Layer, Image as KonvaImage } from "react-konva";
import { PLAYER_START } from "../../utils/constants";
import useImage from "use-image";

const Player = ({ grid, onVictory, tileSize, offsetX = 0, offsetY = 0 }) => {
  const [position, setPosition] = useState(PLAYER_START);
  const [playerImage] = useImage("../src/assets/Sprites/Capi.png");

  const canMove = (x, y) => {
    return grid[y] && grid[y][x] === 0 || grid[y][x] === 2;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      setPosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        if (e.key === "ArrowUp" && canMove(prev.x, prev.y - 1)) newY--;
        if (e.key === "ArrowDown" && canMove(prev.x, prev.y + 1)) newY++;
        if (e.key === "ArrowLeft" && canMove(prev.x - 1, prev.y)) {
          newX--;
        }
        if (e.key === "ArrowRight" && canMove(prev.x + 1, prev.y)) {
          newX++;
        }
        if (grid[newY] && grid[newY][newX] === 2){
          onVictory?.()
        }
        return { x: newX, y: newY };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [grid, onVictory]);

  return (
    <Layer x={offsetX} y={offsetY}>
      <KonvaImage
        x={position.x * tileSize}
        y={position.y * tileSize}
        width={tileSize}
        height={tileSize}
        image={playerImage}
      ></KonvaImage>
    </Layer>
  );
};

export default Player;
