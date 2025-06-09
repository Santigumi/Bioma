import RegisterForm from "../../components-screens/RegisterForm/RegisterForm";
import backgroundImage from "/assets/backgrounds/fondoregister.webp";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../../Themes/Theme";
const RegisterPage = () => {
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
          }}
        >
          <RegisterForm></RegisterForm>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default RegisterPage;
