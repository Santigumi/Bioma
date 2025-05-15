import { createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: `'Livvic', sans-serif`, // Usa el nombre de la fuente
  },
  palette: {
    green: {
      main: "#00E773",
      contrastText: "#ffffff",
    },
    yellow: {
      main: "#FFEE8B",
      contrastText: "#fff",
    },
    blue: {
      main: "#4AB8F0",
      contrastText: "#fff",
    },
    red: {
      main: "#D62828",
      secondary: "#ED7C7C",
      contrastText: "#fff",
    },
  },
});

export default theme;
