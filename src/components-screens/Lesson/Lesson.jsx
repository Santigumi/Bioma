import { Box, Typography, Divider } from "@mui/material";
const Lesson = ({ index, tituleText }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        gap: 5,
        height: "10%",
        width: "95%",
        borderRadius: 7.5,
        paddingLeft: "3rem",
        backgroundColor: "#FFEE8B",
        boxShadow: 3,
        cursor: "pointer"
      }}
    >
      <Typography variant="h6">Lesson {index}</Typography>
      <Divider orientation="vertical" variant="middle" flexItem sx={{borderRightWidth: 2, color: "black", borderColor:"black"}}></Divider>
      <Typography variant="h6">{tituleText}</Typography>
    </Box>
  );
};

export default Lesson;
