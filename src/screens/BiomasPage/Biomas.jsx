import { Box, Typography, Grid } from "@mui/material";

import CardOne from "../../components-screens/CardOne/CardOne";
import Navbar from "../../components-screens/Navbar/Navbar";
const Biomas = () => {
  const arrayBiomas = [
    { nombre: "Savannah" },
    { nombre: "Moorland" },
    { nombre: "Desert" },
    { nombre: "Tropical Forest" },
    { nombre: "Seagrass" },
    { nombre: "Pelagic ecosystem" },
    { nombre: "Mangroves" },
    { nombre: "Reef" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        gap: "5%",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        backgroundImage: "url('../src/assets/backgrounds/fondolanding.jpg')"
      }}
    >
      <Box>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "10%",
          borderRadius: 7.5,
          paddingLeft: "3rem",
          backgroundColor: "#FFEE8B",
          boxShadow: 3,
        }}
      >
        <Typography variant="h4">Biomas</Typography>
      </Box>
      <Grid
        container
        columnSpacing={6}
        spacing={4}
        sx={{
          borderRadius: 10,
          width: "100%",
          minHeight: "70%",
        }}
      >
        {arrayBiomas.map((bioma) => {
          return (
            <Grid item xs={12}>
              <CardOne name={bioma.nombre}></CardOne>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Biomas;
