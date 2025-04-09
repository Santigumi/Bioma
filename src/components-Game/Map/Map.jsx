import { Layer, Image as KonvaImage, Rect } from "react-konva";
import useImage from "use-image";
import { TITLE_SIZE } from "../../utils/constants";

const Map = ({ grid }) => {
  const [pastoImage] = useImage("../src/assets/Sprites/Pasto.png");
  const [arbolImage] = useImage("../src/assets/Sprites/PlantaSavanah.png");
  return (
    <Layer>
      {grid.map((row, y) =>
        row.map((cell, x) => {
          const posX = x * TITLE_SIZE;
          const posY = y * TITLE_SIZE;

          const title = (
            <KonvaImage
              key={`pasto-${x}-${y}`}
              x={posX + TITLE_SIZE}
              y={posY + TITLE_SIZE}
              width={TITLE_SIZE}
              height={TITLE_SIZE}
              image={pastoImage}
            ></KonvaImage>
          );
          const shouldRenderTree = cell === 1 && x % 2 === 0 && y % 2 === 0;

          const tree =
            shouldRenderTree && arbolImage ? (
              <KonvaImage
                key={`arbol-${x}-${y}`}
                x={posX}
                y={posY}
                width={TITLE_SIZE * 2}
                height={TITLE_SIZE * 2}
                image={arbolImage}
              />
            ) : null;

          return [title, tree];
        })
      )}
    </Layer>
  );
};

export default Map;
