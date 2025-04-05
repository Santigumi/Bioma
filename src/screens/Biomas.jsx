import { Box, Typography, Tabs } from "@mui/material";

const Biomas = () => {
    const arrayBiomas = [
      {nombre:"Savannah"},
      {nombre:"Moorland"},
      {nombre:"Desert"},
      {nombre:"Tropical Forest"},
      {nombre:"Seagrass"},
      {nombre:"Pelagic ecosystem"},
      {nombre:"Mangroves"},
      {nombre:"Reef"}
    ]
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
          <Box
            sx={{
              borderRadius: 10,
              width: "100%",
              minHeight: "70%",
              backgroundColor: "#FFEE8B",
              boxShadow: 3
            }}
          ></Box>
        </Box>
      );
};

export default Biomas;
