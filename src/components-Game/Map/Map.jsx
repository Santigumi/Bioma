import { Layer, Image as KonvaImage, Rect } from "react-konva";
import useImage from "use-image";

const TITLE_SIZE = 50;

const Map = ({ grid }) => {
  const [pastoImage] = useImage("/assets/Sprites/Pasto.png");
  return (
    <Layer>
      {grid.map((row, y)=>
      row.map((cell, x) => {
        const posX = x * TITLE_SIZE;
        const posY = y * TITLE_SIZE;

        if(cell === 1){
          return(
            <KonvaImage>
              key={`${x}-${y}`}
              x={posX}
              y={posY}
              width={TITLE_SIZE}
              height={TITLE_SIZE}
              image={pastoImage} 
            </KonvaImage>
          );
        }

        return (
          <Rect>
           key={`${x}-${y}`}
              x={posX}
              y={posY}
              width={TITLE_SIZE}
              height={TITLE_SIZE}
              fill="lightgreen"
              stroke="gray" 
          </Rect>
        )
      })
      )}
    </Layer>
  );
};

export default Map;
