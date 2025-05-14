import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const CardOne = ({ name, image, direction }) => {
  return (
    <Link
      to={direction}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItemst: "center",
          width: "18rem",
          height: "13rem",
          backgroundColor: "#00E773",
          borderRadius: 5,
          boxShadow: 8,
          cursor: "pointer",
        }}
      >
        <img
          style={{
            width: "18rem",
            height: "10rem",
            borderRadius: 5,
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
            height: "5rem",
          }}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
};
export default CardOne;
