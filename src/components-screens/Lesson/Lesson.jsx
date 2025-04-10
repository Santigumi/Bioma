import { Box, Typography, Divider } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
const Lesson = ({ index, tituleText, boolean }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 105,
        height: "10%",
        width: "95%",
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
  );
};

export default Lesson;
