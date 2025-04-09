import { Box, Typography } from "@mui/material";
const CardOne = ({ name, image }) => {
  return (
    <Box
      sx={{
        width: "325px",
        height: "225px",
        border: 1,
        backgroundColor: "#00E773",
        borderRadius: 5
      }}
    >
      <img src={image}></img>
      <Typography variant="h6">{name}</Typography>
    </Box>
  );
};
export default CardOne;
