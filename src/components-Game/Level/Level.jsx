import { Stage } from "react-konva";
import Map from "../Map/Map";
import Player from "../Player/Player";
import { GRID_MAP } from "../../utils/constants";

const Level = () => {
  return (
    <Stage width={GRID_MAP[0].length * 50} height={GRID_MAP.length * 50}>
      <Map grid={GRID_MAP} />
      <Player grid={GRID_MAP} />
    </Stage>
  );
};

export default Level;
