import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components-screens/Typography/Typography";
import Router from "./Router/Index";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
    </>
  );
}

export default App;
