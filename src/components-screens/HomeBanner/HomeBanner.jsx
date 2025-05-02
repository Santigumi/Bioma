import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const HomeBanner = () => {
  const navigate = useNavigate();
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
        >
        <Typography>Welcome back, your name</Typography>
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
            <Typography>Continue your lessons</Typography>
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
            <Typography>Trophy trail</Typography>
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
            <Typography sx={{}}>You can wacth, read</Typography>
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeBanner;
