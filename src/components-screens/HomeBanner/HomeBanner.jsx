import { Box, Typography, Grid } from "@mui/material";
const HomeBanner = () => {
  return <Box sx={{
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '3rem',
    height: "100vh",
    width: "80vw",
  }}>
    <Box sx={{
    height: "21rem",
    width: "70rem",
    backgroundColor: 'gray',
    borderRadius: '2rem'    
    }}></Box>
    <Grid container spacing={3}>
        <Box sx={{
            width:'22.5rem',
            height:'15rem',
            backgroundColor: 'gray',
            borderRadius: '2rem'  
        }}></Box>
        <Box sx={{
            width:'22.5rem',
            height:'15rem',
            backgroundColor: 'gray',
            borderRadius: '2rem'  
        }}></Box>
        <Box 
        sx={{
            width:'22.5rem',
            height:'15rem',
            backgroundColor: 'gray',
            borderRadius: '2rem'  
        }}
        ></Box>
    </Grid>
  </Box>;
};

export default HomeBanner;
