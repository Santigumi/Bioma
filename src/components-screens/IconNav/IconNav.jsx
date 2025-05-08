import { Box, Typography } from "@mui/material";
const IconNav = ({ icon, textIcon, alt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height:"100%",
        cursor: "pointer",
      }}
    >
      <img src={icon} alt={alt} style={{ width: "40%" }} />
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
