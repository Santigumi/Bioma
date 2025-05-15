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
          },
          justifyContent: "start",
          gap: {
            xs: 0,
            sm: 0,
            md: 10,
            lg: 10,
            xl: 10
          },
          width: '100%',
          height: '100%',
          alignItems: "center",
          backgroundImage: "url('../src/assets/backgrounds/fondolanding.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          overflowY: "auto",
        }}
      >
        <Navbar></Navbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "90%",
            width: {
              sx: "100vw",
              ms: "100vw",
              md: "100vw",
              lg: "75vw",
              xl: "75vw",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              width: "100%",
              backgroundColor: {
                xs: "transparent",
                sm: "transparent",
                md: theme.palette.green.secondary,
                lg: theme.palette.green.secondary,
                xl: theme.palette.green.secondary,
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
                gap: {
                  xs: 1,
                  sm: 1,
                  md: 1,
                  lg: 3,
                  xl: 3,
                },
                width: {
                  xs: "90vw",
                  sm: "90vw",
                  md: "90vw",
                  lg: "95%",
                  xl: "95%",
                },
                height: {
                  xs: "35vh",
                  sm: "35vh",
                  md: "35vh",
                  lg: "40%",
                  xl: "40%",
                },
              }}
            >
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
                    xs: "30%",
                    ms: "30%",
                    md: "30%",
                    lg: "100%",
                    xl: "100%",
                  },
                  backgroundColor: theme.palette.yellow.secondary,
                  borderRadius: "2rem",
                  color: "black",
                  boxShadow: 3,
                }}
              >
                <Typography variant="h6">✿ Continue your lessons</Typography>
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
                    xs: "30%",
                    ms: "30%",
                    md: "30%",
                    lg: "100%",
                    xl: "100%",
                  },
                  backgroundColor: theme.palette.blue.main,
                  borderRadius: "2rem",
                  color: "black",
                  boxShadow: 3,
                }}
              >
                <Typography variant="h6">$ Trophy Store</Typography>
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
                    xs: "30%",
                    ms: "30%",
                    md: "30%",
                    lg: "100%",
                    xl: "100%",
                  },
                  backgroundColor: theme.palette.red.main,
                  borderRadius: "2rem",
                  color: "black",
                  boxShadow: 3,
                }}
              >
                <Typography variant="h6">⬈ You can watch or read</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Home;
