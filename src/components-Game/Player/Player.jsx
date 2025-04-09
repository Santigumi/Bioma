import React, { useState, useEffect } from "react";
import { Layer, Image as KonvaImage } from "react-konva";
import { TITLE_SIZE, PLAYER_START } from "../../utils/constants";
import useImage from "use-image";

const Player = ({ grid }) => {
  const [position, setPosition] = useState(PLAYER_START);
  const [playerImage] = useImage("../src/assets/Sprites/Capi.png");

  const canMove = (x, y) => {
    return grid[y] && grid[y][x] === 0;
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

        return { x: newX, y: newY };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [grid]);

  return (
    <Layer>
      <KonvaImage
        x={position.x * TITLE_SIZE}
        y={position.y * TITLE_SIZE}
        width={TITLE_SIZE}
        height={TITLE_SIZE}
        image={playerImage}
      ></KonvaImage>
    </Layer>
  );
};

export default Player;
