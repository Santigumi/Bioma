import Navbar from "../../components-screens/Navbar/Navbar";
import Banner from "../../components-screens/Banner/Banner";
import backgroundImage from "/assets/backgrounds/fondolanding.webp";
import { Box } from "@mui/material";
const LandingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
          xl: "row",
        },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Banner></Banner>
    </Box>
  );
};

export default LandingPage;
