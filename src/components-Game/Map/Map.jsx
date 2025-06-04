import { Layer, Image as KonvaImage } from "react-konva";
import useImage from "use-image";
import { useSelector } from "react-redux";
const Map = ({ grid, tileSize, offsetX = 0, offsetY = 0 }) => {
  const [pastoImage] = useImage("../src/assets/Sprites/Pasto.png");
  const [arbolImage] = useImage("../src/assets/Sprites/PlantaSavanah.png");
  const [itemImage] = useImage("../src/assets/Sprites/moneda.webp")
  const roundedTileSize = Math.round(tileSize);
  const items = useSelector((state) => state.items.items);
 return (
    <Layer x={Math.round(offsetX)} y={Math.round(offsetY)}>
      {grid.map((row, y) =>
        row.map((cell, x) => {
          const posX = x * tileSize;
          const posY = y * tileSize;

          const isFloor = cell === 0 || cell === 2 || cell === 3;

          return (
            <KonvaImage
              key={`tile-${x}-${y}`}
              x={posX - 0.5}
              y={posY - 0.5}
              width={roundedTileSize + 1}
              height={roundedTileSize + 1}
              image={isFloor ? pastoImage : arbolImage}
            />
          );
        })
      )}

      {/* Dibuja los ítems sobre el mapa */}
      {items.map(({ x, y }) => (
        <KonvaImage
          key={`item-${x}-${y}`}
          x={x * tileSize}
          y={y * tileSize}
          width={tileSize}
          height={tileSize}
          image={itemImage}
        />
      ))}
    </Layer>
  );
};

export default Map;
