
import { Stage } from "react-konva";
import Map from "../Map/Map";
import Player from "../Player/Player";

const grid = [
  [1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
];

const Level = () => {
  return (
    <Stage width={grid[0].length * 50} height={grid.length * 50}>
      <Map grid={grid} />
      <Player grid={grid} />
    </Stage>
  );
};

export default Level;
