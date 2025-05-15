import { Box, Typography } from "@mui/material";
import Level from "../../components-Game/Level/Level";
import Navbar from "../../components-screens/Navbar/Navbar";
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
        backgroundImage:
          "url('../src/assets/backgrounds/Biomas-Background.png')",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "Column",
          justifyContent: "space-between",
          height: "95vh",
          width: "85vw",
        }}
      >
        <Box
          className="Estructure"
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
          <Typography variant="h4">Savannah - lesson 1</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "6%",
            width: "90%",
            borderRadius: 7.5,
            paddingLeft: "3rem",
            backgroundColor: "#FFEE8B",
            boxShadow: 3,
          }}
        >
          <Typography variant="body1">
            Learn the species that live in this place: Control the Capybara and
            see how is their life.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "75%",
          }}
        >
          <Level></Level>
        </Box>
      </Box>
    </Box>
  );
};

export default Game;
