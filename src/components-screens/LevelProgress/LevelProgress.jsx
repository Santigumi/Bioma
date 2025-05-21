import "./LevelProgress.css";
import { Box, Typography } from "@mui/material";
const LevelProgress = ({ iconProgress, percentage, color }) => {
  return (
    <Box sx={{ backgroundColor: color || `rgba(10, 191, 100, 1)`, 
    width: "100%",
    height: "80%"
    }}>
      <Typography>{percentage}</Typography>
    </Box>
  );
};

export default LevelProgress;


