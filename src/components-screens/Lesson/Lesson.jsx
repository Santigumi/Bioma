import { Box, Typography, Divider } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
const Lesson = ({ index, tituleText, boolean, direction }) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(direction)}
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        height: "12%",
        width: "100%",
        borderRadius: 7.5,
        backgroundColor: "#FFEE8B",
        boxShadow: 3,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          height: "100%",
          width: "95%",
        }}
      >
        <Typography variant="h6">Lesson {index}</Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderRightWidth: 2, borderColor: "black" }}
        ></Divider>
        <Typography variant="h6">{tituleText}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {boolean === true ? <ArrowForwardIcon /> : <LockIcon />}
      </Box>
    </Box>
  );
};

export default Lesson;
