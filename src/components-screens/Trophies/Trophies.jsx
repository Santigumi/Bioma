import { Box, Typography, ThemeProvider } from "@mui/material";
import theme from "../../Themes/Theme";

const Trophies = ({ Trophies }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.green.secondary,
          width: "25%",
          borderRadius: 7.5,
        }}
      >
        <Typography variant="h4">${Trophies}</Typography>
      </Box>
    </ThemeProvider>
  );
};
export default Trophies;
