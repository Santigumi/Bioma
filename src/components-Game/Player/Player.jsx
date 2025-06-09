import { useState, useEffect } from "react";
import { Layer, Image as KonvaImage } from "react-konva";
import { PLAYER_START } from "../../utils/constants";
import useImage from "use-image";
import { useDispatch, useSelector } from "react-redux";
import { collectItem } from "../../redux/game/itemsSlice";
const Player = ({
  grid,
  onVictory,
  tileSize,
  offsetX = 0,
  offsetY = 0,
  isPaused,
  onPlayerMove,
}) => {
  const [position, setPosition] = useState(PLAYER_START);
  const [playerImage] = useImage("/assets/characters/Capibara.png");
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const canMove = (x, y) => {
    return (
      grid[y] && (grid[y][x] === 0 || grid[y][x] === 2 || grid[y][x] === 3)
    );
  };

  const isItemAt = (x, y) => {
    return items.some((item) => item.x === x && item.y === y);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isPaused) return;

      let newX = position.x;
      let newY = position.y;

      if (e.key === "ArrowUp" && canMove(position.x, position.y - 1)) newY--;
      if (e.key === "ArrowDown" && canMove(position.x, position.y + 1)) newY++;
      if (e.key === "ArrowLeft" && canMove(position.x - 1, position.y)) newX--;
      if (e.key === "ArrowRight" && canMove(position.x + 1, position.y)) newX++;

      if (grid[newY] && grid[newY][newX] === 2) {
        onVictory?.();
      }

      const newPosition = { x: newX, y: newY };
      setPosition(newPosition);
      onPlayerMove?.(newPosition); // ← Notifica al padre
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [position, grid, isPaused, onVictory]);

  useEffect(() => {
    if (isPaused) return;
    if (isItemAt(position.x, position.y)) {
      dispatch(collectItem({ x: position.x, y: position.y }));
    }
  }, [position, isPaused, dispatch]);

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
