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
            xs: "column",
            md: "column",
            lg: "row",
            xl: "row",
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
            height: "100vh",
            width: "80vw",
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
              backgroundColor: "#45C484",
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
                height: "21rem",
                width: "73rem",
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
            <Grid container spacing={3}>
              <Button
                onClick={() => navigate("/Lessons")}
                sx={{
                  width: "23.5rem",
                  height: "15rem",
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
                  width: "23.5rem",
                  height: "15rem",
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
                  width: "23.5rem",
                  height: "15rem",
                  backgroundColor: "black",
                  borderRadius: "2rem",
                  color: "white",
                }}
              >
                You can wacth, read
              </Button>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Home;
