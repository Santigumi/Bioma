import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const IconNav = ({ icon, textIcon, alt, route }) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate( route )}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: {
          xs: "10vh",
          sm: "10vh",
          md: "70%",
          lg: "70%",
          xl: "70%",
        },
        height: {
          xs: "100%",
          sm: "100%",
          md: "5rem",
          lg: "5rem",
          xl: "5rem",
        },
        cursor: "pointer",
      }}
    >
      <img
        src={icon}
        alt={alt}
        style={{
          width: "40%",
          height: "40%",
        }}
      />
      <Box>
        <Typography
          sx={{
            fontSize: "0.9rem",
            textAlign: "center",
            width: "100%",
            display: {
              xs: "none",
              ms: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          {textIcon}
        </Typography>
      </Box>
    </Box>
  );
};

export default IconNav;
