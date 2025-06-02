import { Stage, Group } from "react-konva";
import Map from "../Map/Map";
import Player from "../Player/Player";
import { GRID_MAP } from "../../utils/constants";
import { useRef, useState, useEffect } from "react";

const Level = ({ onVictory }) => {
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const mapWidth = GRID_MAP[0]?.length || 1;
  const mapHeight = GRID_MAP.length || 1;
  const tileSize = Math.floor(
    Math.min(dimensions.width / mapWidth, dimensions.height / mapHeight)
  );
  const mapRenderWidth = mapWidth * tileSize;
  const mapRenderHeight = mapHeight * tileSize;

  const offsetX = (dimensions.width - mapRenderWidth) / 2;
  const offsetY = (dimensions.height - mapRenderHeight) / 2;
  const ready = dimensions.width > 0 && dimensions.height > 0 && tileSize > 0;
  return (
    <div
      ref={containerRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      {ready ? (
        <Stage
          width={dimensions.width}
          height={dimensions.height}
          styles={{ backgroundColor: "#00000" }}
        >
          <Map
            grid={GRID_MAP}
            tileSize={tileSize}
            offsetX={offsetX}
            offsetY={offsetY}
          />
          <Player
            grid={GRID_MAP}
            onVictory={onVictory}
            tileSize={tileSize}
            offsetX={offsetX}
            offsetY={offsetY}
          />
        </Stage>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default Level;
