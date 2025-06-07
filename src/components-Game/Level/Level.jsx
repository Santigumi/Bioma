import { Stage } from "react-konva";
import Map from "../Map/Map";
import Player from "../Player/Player";
import { GRID_MAP } from "../../utils/constants";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "../../redux/game/itemsSlice";
import Trap from "../Trap/Trap";

const Level = ({ onVictory, isPaused, onGameOver }) => {
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });

  const dispatch = useDispatch();

  useEffect(() => {
    const collectibleItems = [];
    GRID_MAP.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 3) {
          collectibleItems.push({ x, y });
        }
      });
    });
    dispatch(setItems(collectibleItems));
  }, [dispatch]);

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
        <Stage width={dimensions.width} height={dimensions.height}>
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
              isPaused={isPaused}
              onMove={setPlayerPos}
              onPlayerMove={(pos) => setPlayerPos(pos)}
            />
            <Trap
              x={4}
              y={3}
              tileSize={tileSize}
              offsetX={offsetX}
              offsetY={offsetY}
              playerPosition={playerPos}
              isPaused={isPaused}
              onGameOver={onGameOver}
            />
        </Stage>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default Level;
