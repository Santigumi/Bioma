import { Box, Typography, Grid, ThemeProvider } from "@mui/material";
import { arrayBiomas } from "../../Data/DataBiomas";
import CardOne from "../../components-screens/CardOne/CardOne";
import Navbar from "../../components-screens/Navbar/Navbar";
import theme from "../../Themes/Theme";
const Biomas = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
            xl: "row",
          },
          alignItems: "center",
          width: "100%",
          height: {
            xs: "fit-content",
            sm: "fit-content",
            md: "100vh",
            lg: "100vh",
            xl: "100vh",
          },
          paddingBottom: {
            xs: "10rem",
            sm: "10rem",
            md: 0,
            lg: 0,
            xl: 0,
          },
          paddingTop: {
            xs: "2rem",
            sm: "2rem",
            md: 0,
            lg: 0,
            xl: 0,
          },
          boxSizing: "border-box",
          backgroundImage:
            "url('../src/assets/backgrounds/Biomas-Background.png')",
          overflowY: {
            xs: "auto",
            sm: "auto",
            md: "hidden",
            lg: "hidden",
            xl: "hidden",
          },
        }}
      >
        <Box>
          <Navbar backgroundColor="#FFEE8B" />
        </Box>
        <Box
          ClassName="Estructure"
          sx={{
            display: "flex",
            flexDirection: "Column",
            justifyContent: {
              xs: "space-around",
              sm: "space-around",
              md: "space-between",
              lg: "space-between",
              xl: "space-between",
            },
            height: {
              xs: "90%",
              sm: "90%",
              md: "90%",
              lg: "90%",
              xl: "90%",
            },
            width: "100%",
            gap: 3,
            border: 1
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: {
                xs: "5rem",
                sm: "5rem",
                md: "10%",
                lg: "10%",
                xl: "10%",
              },
              width: "90%",
              borderRadius: 7.5,
              paddingLeft: {
                xs: "0",
                sm: "0",
                md: "3rem",
                lg: "3rem",
                xl: "3rem",
              },
              backgroundColor: "#FFEE8B",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                  xl: "start",
                },
                fontSize: {
                  xs: "2rem",
                  sm: "2rem",
                  md: "2rem",
                },
              }}
            >
              Biomas
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "auto",
              width: "90%",
              borderRadius: 7.5,
              padding: "1rem",
              backgroundColor: "#FFEE8B",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1.2rem",
                },
                textAlign: {
                  xs:'center',
                  sm:'center',
                  md:'start',
                  lg:'start',
                  xl:'start'
                },
              }}
            >
              Explore the 8 types of Colombian ecosystems and learn about their
              species, problems and opportunities through games.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "start",
                lg: "start",
                xl: "start",
              },
              width: "90%",
              height: {
                xs: "75%",
                sm: "75%",
                md: "70%",
                lg: "70%",
                xl: "70%",
              },
              boxSizing: "border-box",
              gap: {
                xs: 3,
                sm: 3,
                md: 3,
                lg: 5,
                xl: 5,
              },
            }}
          >
            {arrayBiomas.map((bioma) => {
              return (
                <CardOne
                  name={bioma.nombre}
                  image={bioma.image}
                  direction={bioma.route}
                  key={bioma.nombre}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Biomas;
