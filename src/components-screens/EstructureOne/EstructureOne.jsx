import { Box, Container, Typography } from "@mui/material";

const EstructureOne = ({ titule, bgcolor }) => {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "10%",
          borderRadius: 7.5,
          paddingLeft: "3rem",
          backgroundColor: bgcolor,
          boxShadow: 3,
        }}
      >
        <Typography variant="h3">{titule}</Typography>
      </Box>
      <Box
        sx={{
          borderRadius: 10,
          width: "100%",
          height: "70%",
          backgroundColor: bgcolor,
          boxShadow: 3
        }}
      ></Box>
    </Box>
  );
};

export default EstructureOne;
