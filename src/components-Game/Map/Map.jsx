
import React from "react";
import { Layer, Rect } from "react-konva";

const TILE_SIZE = 50;

const Map = ({ grid }) => {
  return (
    <Layer>
      {grid.map((row, y) =>
        row.map((cell, x) => (
          <Rect
            key={`${x}-${y}`}
            x={x * TILE_SIZE}
            y={y * TILE_SIZE}
            width={TILE_SIZE}
            height={TILE_SIZE}
            fill={cell === 1 ? "black" : "lightgreen"} // Paredes en negro, caminos en verde
            stroke="gray"
          />
        ))
      )}
    </Layer>
  );
};

export default Map;
