import { Box, Typography, ThemeProvider } from "@mui/material";
import theme from "../../Themes/Theme";

const Trophies = ({ Trophies }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: theme.palette.green.main, width: "70%" }}>
        <Typography variante="subtitule1">${Trophies}</Typography>
      </Box>
    </ThemeProvider>
  );
};
export default Trophies;
