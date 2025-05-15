import Navbar from "../../components-screens/Navbar/Navbar";
import LoginForm from "../../components-screens/LoginForm/LoginForm";
import backgroundImage from "../../assets/backgrounds/fondoregister.webp";
import { Box } from "@mui/material";
const LoginPage = () => {
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
          height: '100vh',
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
