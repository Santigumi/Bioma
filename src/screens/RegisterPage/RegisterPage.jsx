import Navbar from "../../components-screens/Navbar/Navbar";
import RegisterForm from "../../components-screens/RegisterForm/RegisterForm";
import backgroundImage from "../../assets/backgrounds/fondoregister.webp";
import { Box, ThemeProvider } from "@mui/material";
const RegisterPage = () => {
  return (
    <Box
      className="background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar></Navbar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: {
            xs: "100%",
            sm: "100%",
            md: "80vw",
            lg: "80vw",
            xl: "80vw",
          },
          height: "100vh",
          border: 1,
        }}
      >
        <RegisterForm></RegisterForm>
      </Box>
    </Box>
  );
};

export default RegisterPage;
