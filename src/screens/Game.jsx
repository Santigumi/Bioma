import { Box, Typography } from "@mui/material";
import Level from "../components-Game/Level/Level";
import Navbar from "../components-screens/Navbar/Navbar";
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
      <Box>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "10%",
          width: "90%",
          borderRadius: 7.5,
          paddingLeft: "3rem",
          backgroundColor: "#FFEE8B",
          boxShadow: 3,
        }}
      >
        <Typography variant="h4">Savannah - lessons</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          border: 1,
          borderColor: "red",
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
