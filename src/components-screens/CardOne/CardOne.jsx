import { Box, Typography } from "@mui/material";
const CardOne = ({ name, image }) => {
  return (
    <Box
      sx={{
        width: "285px",
        height: "205px",
        backgroundColor: "#00E773",
        borderRadius: 5,
        boxShadow: 8,
        cursor: "pointer"
      }}
    >
      <img
        style={{
          width: "285px",
          height: "150px",
          borderRadius: 5
        }}
        src={image}
      ></img>
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50px"
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};
export default CardOne;
