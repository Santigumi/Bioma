import { Box, Typography, Divider } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
const Lesson = ({ index, tituleText, boolean, direction }) => {
  return (
    <Link
    to={direction}
    >
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 105,
        height: "7vh",
        width: "80vw",
        borderRadius: 7.5,
        paddingLeft: "3rem",
        backgroundColor: "#FFEE8B",
        boxShadow: 3,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          height: "2rem",
          width: "20rem",
        }}
      >
        <Typography variant="h6">Lesson {index}</Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderRightWidth: 2, color: "black", borderColor: "black" }}
        ></Divider>
        <Typography variant="h6">{tituleText}</Typography>
      </Box>
      <Box>{boolean === true ? <ArrowForwardIcon /> : <LockIcon />}</Box>
    </Box>
    
    </Link>
  );
};

export default Lesson;
