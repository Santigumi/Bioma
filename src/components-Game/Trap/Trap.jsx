import { useEffect, useState } from "react";
import { Rect } from "react-konva";
import { Layer } from "react-konva";
const Trap = ({
  x,
  y,
  tileSize,
  offsetX,
  offsetY,
  playerPosition,
  isPaused,
  onGameOver,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setVisible((prev) => !prev);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (
      !isPaused &&
      visible &&
      playerPosition.x === x &&
      playerPosition.y === y
    ) {
      onGameOver?.();
    }
  }, [playerPosition, isPaused, visible]);

  return (
    <Layer>
      <Rect
        x={x * tileSize + offsetX}
        y={y * tileSize + offsetY}
        width={tileSize}
        height={tileSize}
        fill="red"
        opacity={visible ? 1 : 0} // 👈 Esto evita devolver null
      />
    </Layer>
  );
};

export default Trap;
