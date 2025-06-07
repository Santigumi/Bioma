import { Layer, Rect } from "react-konva";
import { useEffect, useState } from "react";

const Trap = ({ x, y, tileSize, offsetX = 0, offsetY = 0, playerPosition, onGameOver, isPaused }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((prev) => !prev); // alterna estado cada X tiempo
    }, 1500); // cambia cada 1.5s

    return () => clearInterval(interval);
  }, [isPaused]);

  // Detectar colisión solo si está activa
  useEffect(() => {
    if (active && playerPosition.x === x && playerPosition.y === y) {
      onGameOver();
    }
  }, [active, playerPosition, x, y, onGameOver]);

  return (
    <Layer x={offsetX} y={offsetY}>
      {active && (
        <Rect
          x={x * tileSize}
          y={y * tileSize}
          width={tileSize}
          height={tileSize}
          fill="red"
          opacity={0.6}
        />
      )}
    </Layer>
  );
};

export default Trap;
