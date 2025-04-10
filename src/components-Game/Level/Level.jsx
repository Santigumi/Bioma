import { Stage } from "react-konva";
import Map from "../Map/Map";
import Player from "../Player/Player";
import { GRID_MAP, TITLE_SIZE } from "../../utils/constants";

const Level = () => {
  const mapWidth = GRID_MAP[0].length;
  const mapHeight = GRID_MAP.length
  return (
    <Stage width={mapWidth * TITLE_SIZE} height={mapHeight * TITLE_SIZE}>
      <Map grid={GRID_MAP} />
      <Player grid={GRID_MAP} />
    </Stage>
  );
};

export default Level;
