import { Box, Typography } from "@mui/material";
const Titule = ({tituleText}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "10%",
        width: "30%",
        borderRadius: 7.5,
        paddingLeft: "3rem",
        backgroundColor: "#FFEE8B",
        boxShadow: 3,
      }}
    >
      <Typography variant="h4">{tituleText}</Typography>
    </Box>
  );
};

export default Titule;
