import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components-screens/Typography/Typography";
import Router from "./Router/Index";
import appFirebase from "./credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import auth = getAuth(appFirebase);

function App() {
  
  const [user, setUser] = useState(null);
  
  onAuthStateChanged(auth, (userFirebase) => {
    if(userFirebase){
      setUser(userFirebase);
    }
    else{
      setUser(null)
    };
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
