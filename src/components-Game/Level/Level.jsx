import { Stage } from "react-konva";
import Map from "../Map/Map";
import Player from "../Player/Player";
import { GRID_MAP } from "../../utils/constants";
import { useRef, useState, useEffect } from "react";

const Level = ({ onVictory }) => {

  const containerRef = useRef();
  const [dimensions, setDimensions] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
        setLoading(false);
      }
    };
    setTimeout(() => {
      updateSize();
      window.addEventListener("resize", updateSize);
    }, 300);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (loading || !dimensions) {
    return <div ref={containerRef}>Loading map</div>;
  }
  const mapWidth = GRID_MAP[0].length || 1;
  const mapHeight = GRID_MAP.length || 1;
  const tileSize = Math.floor(
    Math.min(dimensions.width / mapWidth, dimensions.height / mapHeight)
  );

  return (
    <div
      ref={containerRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <Stage width={dimensions.width} height={dimensions.height}>
        <Map grid={GRID_MAP} tileSize={tileSize} />
        <Player grid={GRID_MAP} onVictory={onVictory} tileSize={tileSize} />
      </Stage>
    </div>
  );
};

export default Level;
