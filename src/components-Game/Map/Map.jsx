import { Layer, Image as KonvaImage } from "react-konva";
import useImage from "use-image";

const Map = ({ grid, tileSize, offsetX = 0, offsetY = 0 }) => {
  const [pastoImage] = useImage("../src/assets/Sprites/Pasto.png");
  const [arbolImage] = useImage("../src/assets/Sprites/PlantaSavanah.png");
  const roundedTileSize = Math.round(tileSize);
  console.log(roundedTileSize);
  
  return (
    <Layer x={Math.round(offsetX)} y={Math.round(offsetY)}>
      {grid.map((row, y) =>
        row.map((cell, x) => {
          const posX = x * tileSize;
          const posY = y * tileSize;

          if (cell === 1) {
            return (
              <KonvaImage
                key={`${x}-${y}`}
                x={posX - 0.5}
                y={posY - 0.5}
                width={tileSize + 1}
                height={tileSize + 1 }
                image={arbolImage}
              ></KonvaImage>
            );
          }

          return (
            <KonvaImage
              key={`${x}-${y}`}
              x={posX - 0.5}
              y={posY - 0.5}
              width={roundedTileSize + 1}
              height={roundedTileSize + 1}
              image={pastoImage}
            ></KonvaImage>
          );
        })
      )}
    </Layer>
  );
};

export default Map;
