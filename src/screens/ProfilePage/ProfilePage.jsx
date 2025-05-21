import Navbar from "../../components-screens/Navbar/Navbar";
import LevelProgress from "../../components-screens/LevelProgress/LevelProgress";
import InfoCharacter from "../../components-screens/InfoCharacter/InfoCharacter";
import CharacterProfile from "../../components-screens/CharacterProfile/CharacterProfile";
import Capi from "../../assets/characters/Capi.png";
import backgroundImage from "../../assets/backgrounds/fondoregister.webp";
import tree from "../../assets/icons/tree-pine.png";
import rail from "../../assets/icons/rail-symbol.png";
import palm from "../../assets/icons/tree-palm.png";
import atom from "../../assets/icons/atom.png";
import sprout from "../../assets/icons/sprout.png";
import sailboat from "../../assets/icons/sailboat.png";
import { Box, ThemeProvider, Grid, Button } from "@mui/material";
import theme from "../../Themes/Theme";
const ProfilePage = () => {
  const dataBiomas = [
    {}
  ]
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="background"
        sx={{ backgroundImage: `url(${backgroundImage})`, display:"flex", flexDirection:'row' }}
      >
        <Navbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "80vw",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              height: "90%",
              border: 1,
            }}
          >
            <Box sx={{
                width: "50%",
                border: 1
            }}>
              <CharacterProfile nameCharacter="Capybara" imgCharacter={Capi} />
            </Box>

            <Box sx={{
              width: "50%",
              border: 1
            }}>
                  <InfoCharacter username="Capysanti" charactersFound={Capi} />

                    <Grid container spacing= "2" sx={{border: 1, height: "50%"}}>

                    <LevelProgress iconProgress={tree} percentage="96%" />
                    <LevelProgress
                      iconProgress={tree}
                      percentage="45%"
                      color="rgba(255, 228, 67, 1)"
                    />
                    <LevelProgress iconProgress={sprout} percentage="0%" />
 
                    <LevelProgress
                      iconProgress={palm}
                      percentage="16%"
                      color="rgba(255, 228, 67, 1)"
                    />
                    <LevelProgress
                      iconProgress={tree}
                      percentage="5%"
                      color="rgba(0, 141, 213, 1)"
                    />
                    <LevelProgress
                      iconProgress={sailboat}
                      percentage="15%"
                      color="rgba(71, 193, 255, 1)"
                    />
                    <LevelProgress
                      iconProgress={tree}
                      percentage="5%"
                      color="rgba(0, 141, 213, 1)"
                    />
                    <LevelProgress
                      iconProgress={rail}
                      percentage="0%"
                      color="rgba(71, 193, 255, 1)"
                    />
                    <LevelProgress
                      iconProgress={atom}
                      percentage="0%"
                      color="rgba(0, 141, 213, 1)"
                    />
                    </Grid>

                    <Button>Cerrar sesión</Button>
                </Box>

          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ProfilePage;
