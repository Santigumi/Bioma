import { useEffect, useState } from "react";
import useImage from "use-image";
import { Image as KonvaImage } from "react-konva";
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
  const [trapImage] = useImage("/assets/Sprites/Pinchos.png");
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
    <>
      {visible && trapImage && (
        <KonvaImage
          image={trapImage}
          x={x * tileSize + offsetX}
          y={y * tileSize + offsetY}
          width={tileSize}
          height={tileSize}
        />
      )}
    </>
  );
};

export default Trap;
