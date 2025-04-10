import { Box } from "@mui/material";
import Titule from "../components-screens/Titule/Titule";
import Level from "../components-Game/Level/Level"

const Game = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        paddingLeft: "10rem",
        backgroundImage:
          "url('../src/assets/backgrounds/Biomas-Background.png')",
      }}
    >
      <Titule tituleText={"Savannah > Lesson 1"}></Titule>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          border: 1,
          borderColor: 'red',
          width: "100%",
          minHeight: "40%",
        }}
      >
        <Level></Level>
      </Box>
    </Box>
  );
};

export default Game;
