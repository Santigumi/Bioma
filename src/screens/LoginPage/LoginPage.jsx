import Navbar from "../../components-screens/Navbar/Navbar";
import LoginForm from "../../components-screens/LoginForm/LoginForm";
import backgroundImage from "/assets/backgrounds/fondoregister.webp";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../../Themes/Theme";
const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="background"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          display: "flex",
          flexDirection: "row",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: {
              xs: "100%",
              sm: "100%",
              md: "100vw",
              lg: "100vw",
              xl: "100vw",
            },
            height: "100vh",
            border: 2
          }}
        >
          <LoginForm />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
