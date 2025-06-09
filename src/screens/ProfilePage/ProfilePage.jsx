import Navbar from "../../components-screens/Navbar/Navbar";
import LevelProgress from "../../components-screens/LevelProgress/LevelProgress";
import InfoCharacter from "../../components-screens/InfoCharacter/InfoCharacter";
import CharacterProfile from "../../components-screens/CharacterProfile/CharacterProfile";
import Capi from "/assets/characters/Capibara.png";
import backgroundImage from "/assets/backgrounds/fondoregister.webp";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/auth/AuthSlice";
import { logoutUser } from "../../services/firebaseUtils";
import { Box, ThemeProvider, Grid, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { setProgress } from "../../redux/game/statsSlice";

import theme from "../../Themes/Theme";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataBiomas, setDataBiomas] = useState([]);

  const user = useSelector((state) => state.auth.user);
  const progress = useSelector((state) => state.progress.completedLevels);
  console.log("Progress:", progress);
  console.log("Biomas keys:", Object.keys(progress));

  useEffect(() => {
    if (!user) return;
    const docRef = doc(db, "progress", user.uid);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        dispatch(setProgress(data));
      }
    });

    return () => unsubscribe();
  }, [user, dispatch]);

  useEffect(() => {
    const updated = Object.keys(progress).map((biomaKey) => {
      const { count = 0 } = progress[biomaKey] || {};
      const percent = Math.round((count / 4) * 100);

      const colorMap = {
        Savannah: "rgba(10, 191, 100, 1)",
        Desert: "rgba(255, 200, 100, 1)",
        Moorland: "rgba(255, 228, 67, 1)",
        Tropical_Forest: "rgba(255, 228, 67, 1)",
        Seagrass: "rgba(0, 141, 213, 1)",
        Pelagic_Ecosystem: "rgba(71, 193, 255, 1)",
        Mangroves: "rgba(0, 141, 213, 1)",
        Reef: "rgba(71, 193, 255, 1)",
      };

      return {
        percentaje: `${percent}%`,
        color: colorMap[biomaKey] || "#ccc",
      };
    });

    setDataBiomas(updated);
  }, [progress]);

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result.success) {
      dispatch(clearUser());
      navigate("/");
    } else {
      console.error("Error al cerrar sesión:", result.error);
      alert("Error al cerrar sesión. Por favor, inténtalo de nuevo.");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="background"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: {
            xs: "2.5rem",
            sm: "2.5rem",
            md: 0,
            lg: 0,
            xl: 0,
          },
          overflowY: {
            xs: "auto",
            sm: "auto",
            md: "hidden",
            lg: "hidden",
            xl: "hidden",
          },
        }}
      >
        <Navbar backgroundColor={theme.palette.red.secondary} />
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
              lg: "row",
              xl: "row",
            },
            justifyContent: {
              xs: "start",
              sm: "start",
              md: "start",
              lg: "center",
              xl: "center",
            },
            alignItems: {
              xs: "start",
              sm: "start",
              md: "start",
              lg: "center",
              xl: "center",
            },
            width: "80vw",
            height: {
              xs: "150vh",
              sm: "150vh",
              md: "150vh",
              lg: "100vh",
              xl: "100vh",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
                lg: "row",
                xl: "row",
              },
              width: {
                xs: "100%",
                sm: "100%",
                md: "80%",
                lg: "80%",
                xl: "80%",
              },
              height: "90%",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "50%",
                  lg: "50%",
                  xl: "50%",
                },
                height: {
                  xs: "50%",
                  sm: "50%",
                  md: "100%",
                  lg: "100%",
                  xl: "100%",
                },
              }}
            >
              <CharacterProfile nameCharacter="Capybara" imgCharacter={Capi} />
              <Button
                sx={{
                  display: {
                    xs: "flex",
                    sm: "flex",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
                variant="contained"
              >
                Cerrar sesión
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "50%",
                  lg: "50%",
                  xl: "50%",
                },
                height: {
                  xs: "80%",
                  sm: "80%",
                  md: "80%",
                  lg: "100%",
                  xl: "100%",
                },
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              <InfoCharacter
                username={user?.username || "Usuario"}
                charactersFound={Capi}
              />

              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "40%",
                }}
              >
                {dataBiomas.map((bioma) => {
                  return (
                    <Grid
                      item
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      xl={4}
                      key={bioma.index}
                      sx={{ width: "25%" }}
                    >
                      <LevelProgress
                        name={bioma.name}
                        percentage={bioma.percentaje}
                        color={bioma.color}
                      ></LevelProgress>
                    </Grid>
                  );
                })}
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={handleLogout}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "flex",
                      lg: "flex",
                      xl: "flex",
                    },
                    backgroundColor: theme.palette.red.secondary
                  }}
                  variant="contained"
                >
                  Cerrar sesión
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ProfilePage;
