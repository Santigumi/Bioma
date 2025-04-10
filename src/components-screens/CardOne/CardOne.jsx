import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const CardOne = ({ name, image, direction }) => {
  return (
    <Link
      to={direction}
    >
      <Box
        sx={{
          width: "285px",
          height: "205px",
          backgroundColor: "#00E773",
          borderRadius: 5,
          boxShadow: 8,
          cursor: "pointer",
        }}
      >
        <img
          style={{
            width: "285px",
            height: "160px",
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
            height: "35px",
          }}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
};
export default CardOne;
