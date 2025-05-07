import Navbar from "../../components-screens/Navbar/Navbar";
import Banner from "../../components-screens/Banner/Banner";
import backgroundImage from "../../assets/backgrounds/fondolanding.jpg";
import { Box } from "@mui/material";
const LandingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
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
      <Navbar></Navbar>
      <Banner></Banner>
    </Box>
  );
};

export default LandingPage;
