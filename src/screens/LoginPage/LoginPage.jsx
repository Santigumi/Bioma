import Navbar from "../../components-screens/Navbar/Navbar";
import LoginForm from "../../components-screens/LoginForm/LoginForm";
import backgroundImage from "../../assets/backgrounds/fondoregister.webp";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../../Themes/Theme";
const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar backgroundColor={theme.palette.red.secondary}></Navbar>
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
          }}
        >
          <LoginForm />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
