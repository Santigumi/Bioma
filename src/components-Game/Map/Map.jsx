import { Layer, Image as KonvaImage, Rect } from "react-konva";
import useImage from "use-image";
import { TITLE_SIZE } from "../../utils/constants";

const Map = ({ grid }) => {
  const [pastoImage] = useImage("../src/assets/Sprites/Pasto.png");
  const [arbolImage] = useImage("../src/assets/Sprites/PlantaSavanah.png")
  return (
    <Layer>
      {grid.map((row, y) =>
        row.map((cell, x) => {
          const posX = x * TITLE_SIZE;
          const posY = y * TITLE_SIZE;

          if (cell === 1) {
            return (
              <KonvaImage
                key={`${x}-${y}`}
                x={posX}
                y={posY}
                width={TITLE_SIZE}
                height={TITLE_SIZE}
                image={arbolImage}
              ></KonvaImage>
            );
          }

          return (
            <KonvaImage
              key={`${x}-${y}`}
              x={posX}
              y={posY}
              width={TITLE_SIZE}
              height={TITLE_SIZE}
              image={pastoImage}
            ></KonvaImage>
          );
        })
      )}
    </Layer>
  );
};

export default Map;
