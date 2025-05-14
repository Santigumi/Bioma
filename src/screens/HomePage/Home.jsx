import Navbar from "../../components-screens/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Button } from "@mui/material";
import theme from "../../Themes/Theme";
const Home = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            md: "column-reverse",
            lg: "row",
            xl: "row",
            alignItems: "center",
            backgroundImage: ``,
          },
        }}
      >
        <Navbar></Navbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100dvh",
            width: {
              sx: "100vw",
              ms: "100vw",
              md: "100vw",
              lg: "80vw",
              xl: "80vw",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "90%",
              width: "100%",
              backgroundColor: {
                xs: "transparent",
                sm: "transparent",
                md: theme.palette.green.main,
                lg: theme.palette.green.main,
                xl: theme.palette.green.main,
              },
              borderRadius: "2rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                padding: 4,
                height: "56%",
                width: "95%",
                backgroundImage: `url("https://elidebio.com/wp-content/uploads/2020/10/A2-1-1024x640.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                borderRadius: "2rem",
                color: "white",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  width: "auto",
                  height: "20%",
                  backgroundColor: "rgba(0, 0, 0, 0.65)",
                  borderRadius: "10px",
                  padding: "10px 5px",
                }}
              >
                Welcome back, your name
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                  xl: "row",
                },
                gap: 3,
                border: 2,
                width: {
                  xs: "90vw",
                  sm: "90vw",
                  md: "90vw",
                  lg: "95%",
                  xl: "95%",
                },
              }}
            >
              <Button
                onClick={() => navigate("/Lessons")}
                sx={{
                  width: {
                    xs: "40%",
                    ms: "40%",
                    md: "40%",
                    lg: "23.5rem",
                    xl: "23.5rem",
                  },
                  height: {
                    xs: "100%",
                    ms: "100%",
                    md: "100%",
                    lg: "15rem",
                    xl: "15rem",
                  },
                  backgroundColor: "black",
                  borderRadius: "2rem",
                  color: "white",
                }}
              >
                Continue your lessons
              </Button>
              <Button
                onClick={() => navigate("/Lessons")}
                sx={{
                  width: {
                    xs: "40%",
                    ms: "40%",
                    md: "40%",
                    lg: "23.5rem",
                    xl: "23.5rem",
                  },
                  height: {
                    xs: "50%",
                    ms: "50%",
                    md: "50%",
                    lg: "15rem",
                    xl: "15rem",
                  },
                  backgroundColor: "black",
                  borderRadius: "2rem",
                  color: "white",
                }}
              >
                Trophy store
              </Button>

              <Button
                onClick={() => navigate("/Lessons")}
                sx={{
                  width: {
                    xs: "100%",
                    ms: "100%",
                    md: "100%",
                    lg: "23.5rem",
                    xl: "23.5rem",
                  },
                  height: {
                    sx: "50%",
                    ms: "50%",
                    md: "50%",
                    lg: "15rem",
                    xl: "15rem",
                  },
                  backgroundColor: "black",
                  borderRadius: "2rem",
                  color: "white",
                }}
              >
                You can wacth, read
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Home;
