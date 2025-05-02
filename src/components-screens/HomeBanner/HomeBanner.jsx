import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
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
            height: "21rem",
            width: "73rem",
            backgroundColor: "yellow",
            borderRadius: "2rem",
          }}
        ></Box>
        <Grid container spacing={3}>
          <Box
            sx={{
              width: "23.5rem",
              height: "15rem",
              backgroundColor: "yellow",
              borderRadius: "2rem",
            }}
          ></Box>
          <Box
            sx={{
              width: "23.5rem",
              height: "15rem",
              backgroundColor: "yellow",
              borderRadius: "2rem",
            }}
          ></Box>
          <Box
            sx={{
              width: "23.5rem",
              height: "15rem",
              backgroundColor: "yellow",
              borderRadius: "2rem",
            }}
          >
            <Link to="/Lessons" sx={{ width: "100%", height: "100%", backgroundColor: 'red' }}>
              Continue your lessons
            </Link>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeBanner;
