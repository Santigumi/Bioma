import { Box, Typography, Grid } from "@mui/material";
import CardOne from "../../components-screens/CardOne/CardOne";
import Navbar from "../../components-screens/Navbar/Navbar";
const Biomas = () => {
  const arrayBiomas = [
    { nombre: "Savannah", image: "https://i.pinimg.com/736x/b6/59/72/b65972ef8b00e9abd0b825d03530442a.jpg"},
    { nombre: "Moorland",  image: "https://i.pinimg.com/736x/d3/95/23/d395234cb987c50856d7106eb0ab20f5.jpg" },
    { nombre: "Desert",  image: "https://i.pinimg.com/474x/f6/b2/8b/f6b28b752e832291a4eebab3acb9f486.jpg" },
    { nombre: "Tropical Forest",  image: "https://i.pinimg.com/736x/f6/b2/8b/f6b28b752e832291a4eebab3acb9f486.jpg" },
    { nombre: "Seagrass",  image: "https://i.pinimg.com/474x/10/a8/96/10a896df46c691a055d509bb9b9d9c54.jpg" },
    { nombre: "Pelagic ecosystem",  image: "https://animalesdecolombia.com.co/wp-content/uploads/2023/03/ecosistema-pelagico-1.jpg" },
    { nombre: "Mangroves",  image: "https://animalesdecolombia.com.co/wp-content/uploads/2023/03/manglares.jpg" },
    { nombre: "Reef",  image: "https://i.pinimg.com/474x/42/aa/11/42aa11b1c966179c8874cefe73c51497.jpg" },
  ];
  return (
    <Box
      className="Container"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        paddingLeft: "10rem",
        backgroundImage: "url('../src/assets/backgrounds/fondolanding.jpg')",
      }}
    >
      <Box>
        <Navbar />
      </Box>

      <Box ClassName="Estructure"
      sx={{
        display: "flex",
        flexDirection: "Column",
        height: "100%",
        width: "100vw",
        border: 3,
        borderColor: "red"
      }}
      >
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
                <CardOne name={bioma.nombre} image={bioma.image}></CardOne>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Biomas;
