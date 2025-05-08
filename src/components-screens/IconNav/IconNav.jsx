import { Box, Typography } from "@mui/material";
const IconNav = ({ icon, textIcon, alt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: {
          xs:'10rem',
          ms:'100%',
          md:'100%',
          lg:'100%',
          xl:'100%',
        },
        height: {
          xs:'100%',
          ms:'100%',
          md:'100%',
          lg:'100%',
          xl:'100%',
        },
        cursor: "pointer",
      }}
    >
      <img src={icon} alt={alt} style={{ width:{
        xs:'15rem',
        sm:'15rem',
        md:'15rem',
        lg:'40%',
        xl:'40%',
      } }} />
      <Box>
        <Typography
          sx={{ fontSize: "0.9rem", textAlign: "center", width: "100%", display:{
            xs:'none',
            ms:'none',
            md:'none',
            lg:'flex',
            xl:'flex'
          } }}
        >
          {textIcon}
        </Typography>
      </Box>
    </Box>
  );
};

export default IconNav;
