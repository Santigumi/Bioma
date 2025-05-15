import { Box, Typography, Grid } from "@mui/material";
import { arrayBiomas } from "../../Data/DataBiomas";
import CardOne from "../../components-screens/CardOne/CardOne";
import Navbar from "../../components-screens/Navbar/Navbar";
const Biomas = () => {
  return (
    <Box
      className="Container"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        paddingLeft: "10rem",
        backgroundImage:
          "url('../src/assets/backgrounds/Biomas-Background.webp')",
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
          justifyContent: "space-around",
          height: "90vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "10%",
            width: "90%",
            borderRadius: 7.5,
            paddingLeft: "3rem",
            backgroundColor: "#FFEE8B",
            boxShadow: 3,
          }}
        >
          <Typography variant="h4">Biomas</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "6%",
            width: "90%",
            borderRadius: 7.5,
            paddingLeft: "3rem",
            backgroundColor: "#FFEE8B",
            boxShadow: 3,
          }}
        >
          <Typography variant="body1">
            Explore the 8 types of Colombian ecosystems and learn about their
            species, problems and opportunities through games.
          </Typography>
        </Box>
        <Grid
          container
          columnSpacing={6}
          spacing={4}
          sx={{
            justifyContent: "flex-start",
            width: "100%",
            minHeight: "60vh",
            boxSizing: "border-box",
          }}
        >
          {arrayBiomas.map((bioma) => {
            return (
              <Grid item xs={12}>
                <CardOne
                  name={bioma.nombre}
                  image={bioma.image}
                  direction={bioma.route}
                ></CardOne>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Biomas;
