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
      <Box>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
