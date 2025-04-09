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
        gap: "5%",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
    >
      <Titule tituleText={"Savannah"}></Titule>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          border: 1,
          borderColor: 'red',
          width: "100%",
          minHeight: "70%",
        }}
      >
        <Level></Level>
      </Box>
    </Box>
  );
};

export default Game;
