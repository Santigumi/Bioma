import { Layer, Image as KonvaImage } from "react-konva";
import useImage from "use-image";
import { useSelector } from "react-redux";
const Map = ({ tileSize, offsetX = 0, offsetY = 0, sprites, mapData }) => {

  const [Obstaculo1Image] = useImage(sprites.Obstacule1);
  const [Obstaculo2Image] = useImage(sprites.Obstacule2);
  const [FloorImage] = useImage(sprites.Floor);
  const [itemImage] = useImage("/assets/Sprites/moneda.webp");
  const roundedTileSize = Math.round(tileSize);
  const items = useSelector((state) => state.items.items);

  return (
    <Layer x={Math.round(offsetX)} y={Math.round(offsetY)}>
      {mapData.map((row, y) =>
        row.map((cell, x) => {
          const posX = x * tileSize;
          const posY = y * tileSize;

          let imageToUse;

          if (cell === 0 || cell === 2 || cell === 3) {
            imageToUse = FloorImage;
          } else if (cell === 4) {
            imageToUse = Obstaculo1Image;
          } else {
            imageToUse = Obstaculo2Image;
          }

          return (
            <KonvaImage
              key={`tile-${x}-${y}`}
              x={posX - 0.5}
              y={posY - 0.5}
              width={roundedTileSize + 1}
              height={roundedTileSize + 1}
              image={imageToUse}
            />
          );
        })
      )}
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
