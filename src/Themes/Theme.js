import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `'Livvic', sans-serif`,
  },
  palette: {
    green: {
      main: "#00E773",
      secondary: "#45C084",
      contrastText: "#000000",
    },
    yellow: {
      main: "#FFEE8B",
      secondary: "#FFE549",
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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#9d9e9d",
          "--TextField-brandBorderHoverColor": "#525452",
          "--TextField-brandBorderFocusedColor": "#ED7C7C",
          "& label.Mui-focused": {
            color: "#ED7C7C",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--TextField-brandBorderFocusedColor)",
            borderWidth: "2px",
          },
        },
        input: {
          color: "#ED7C7C",
        },
      },
    },
    styleOverrides: {
      input: {
        color: "#ED7C7C", // applies to the text inside the DatePicker field
      },
    },
  },
});

export default theme;
