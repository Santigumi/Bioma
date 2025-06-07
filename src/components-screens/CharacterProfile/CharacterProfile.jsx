
import { Box } from "@mui/material";
const CharacterProfile = ({ nameCharacter, imgCharacter }) => {
  return (
    <Box
      sx={{
        border: "20px solid rgba(237, 124, 124, 1)",
        backgroundColor: "rgb(240, 234, 234)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1rem",
      }}
    >
      <Box className="title">
        <h1>{nameCharacter}</h1>
      </Box>
      <Box className="img-character">
        <img src={imgCharacter} alt="P" />
      </Box>
    </Box>
  );
};

export default CharacterProfile;
