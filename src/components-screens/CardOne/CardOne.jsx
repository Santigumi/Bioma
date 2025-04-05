import { Box, Typography } from "@mui/material";
const CardOne = ({name, image}) => {
  return (
    <Box sx={{width}}>
    <img src={image}></img>
      <Typography>{name}</Typography>
    </Box>
  );
};
export default CardOne;
