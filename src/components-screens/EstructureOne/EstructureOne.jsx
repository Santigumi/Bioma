import { Box, Container, Typography } from "@mui/material";

const EstructureOne = ({ titule }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "blue",
        boxSizing: "border-box",
        gap: "5%",
        paddingTop: "1rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingBottom: "1rem"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "10%",
          backgroundColor: "purple",
        }}
      >
        <Typography variant="h3">{titule}</Typography>
      </Box>
      <Box
        sx={{ border: 1, borderRadius: 10, width: "100%", height: "70%" }}
      ></Box>
    </Box>
  );
};

export default EstructureOne;
