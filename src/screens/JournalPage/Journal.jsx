import { Box, Typography, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import Navbar from "../../components-screens/Navbar/Navbar";
import theme from "../../Themes/Theme";
import { ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardOne from "../../components-screens/CardOne/CardOne";
import { fetchFauna } from "../../redux/auth/apiSlice";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  const [error, setError] = useState("");
  const [fauna, setFauna] = useState(null);
  const [loading, setLoading] = useState(false);
  const faunaApi = useSelector((state) => state.fauna.faunaApi);
  console.log("faunaApi", faunaApi);

  useEffect(() => {
    fetchFauna();
  }, []);

  const fetchFauna = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.catalogo.biodiversidad.co/search?fq=REINO:TERRAE`
      );
      if (!response.ok) {
        throw new Error("Fauna no encontrada");
      }
      const data = await response.json();
      setFauna(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`} // ✅ Corregido el template literal
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}{" "}
      {/* ✅ Box con mayúscula */}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Journal = () => {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState(theme.palette.yellow.main);

  // ✅ Redux logic moved to main component
  const dispatch = useDispatch();
  const { items: fauna, loading, error } = useSelector((state) => state.fauna);

  useEffect(() => {
    dispatch(fetchFauna());
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabClick = (newColor) => {
    setColor(newColor);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          alignItems: "center",
          justifyContent: "start",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          backgroundImage:
            "url('../src/assets/backgrounds/Journal-Background.webp')",
          paddingBottom: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
            xl: 0,
          },
          paddingTop: {
            xs: "2rem",
            sm: "2rem",
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
        <Box>
          <Navbar backgroundColor={theme.palette.blue.main} />
        </Box>

        <Box
          className="Structure" // ✅ Corregido className
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: {
              xs: "start", // ✅ Corregido de 'sx' a 'xs'
              sm: "start",
              md: "center",
              lg: "center",
              xl: "center",
            },
            height: {
              xs: "90%",
              sm: "90%",
              md: "90%",
              lg: "100%",
              xl: "100%",
            },
            width: {
              xs: "90%",
              sm: "90%",
              md: "80%",
              lg: "80%",
              xl: "80%",
            },
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "10%",
              borderRadius: 7.5,
              paddingLeft: {
                xs: "0",
                sm: "0",
                md: "3rem",
                lg: "3rem",
                xl: "3rem",
              },
              backgroundColor: theme.palette.blue.main,
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                  xl: "start",
                },
                fontSize: {
                  xs: "2rem",
                  sm: "2rem",
                  md: "2rem",
                },
              }}
            >
              Journal
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              minHeight: "75%",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: {
                  xs: "100%",
                  sm: "100%", // ✅ Corregido de 'ms' a 'sm'
                  md: "40%",
                  lg: "40%",
                  xl: "40%",
                },
                gap: 3,
              }}
            >
              <Tabs
                value={value} // ✅ Agregado value prop
                onChange={handleChange}
                sx={{ width: "100%" }}
              >
                <Tab
                  sx={{
                    backgroundColor: "#FFE549",
                    borderTopLeftRadius: {
                      xs: 15,
                      sm: 15,
                      md: 25,
                      lg: 25,
                      xl: 25,
                    },
                    borderTopRightRadius: {
                      xs: 0,
                      sm: 0,
                      md: 0,
                      lg: 0,
                      xl: 0,
                    },
                    color: "black",
                    flexGrow: 1,
                  }}
                  label="Ecosystem"
                  {...a11yProps(0)}
                  onClick={() => handleTabClick(theme.palette.yellow.main)}
                />
                <Tab
                  sx={{
                    backgroundColor: "#D62828",
                    color: "black",
                    flexGrow: 1,
                  }}
                  label="Animals"
                  {...a11yProps(1)}
                  onClick={() => handleTabClick(theme.palette.red.main)}
                />
                <Tab
                  sx={{
                    backgroundColor: "#00E773",
                    color: "black",
                    flexGrow: 1,
                    borderTopRightRadius: {
                      xs: 15,
                      sm: 15,
                      md: 25,
                      lg: 25,
                      xl: 25,
                    },
                  }}
                  label="Plants"
                  {...a11yProps(2)}
                  onClick={() => handleTabClick(theme.palette.green.main)}
                />
              </Tabs>
            </Box>
            <Box
              sx={{
                padding: "2rem",
                borderRadius: 10,
                borderTopLeftRadius: 0,
                borderTopRightRadius: {
                  xs: 0,
                  sm: 0,
                  md: 30,
                  lg: 30,
                  xl: 30,
                },
                width: "100%",
                height: {
                  xs: "120%",
                  sm: "120%",
                  md: "120%",
                  lg: "90%",
                  xl: "90%",
                },
                backgroundColor: "#F7F8F9",
                border: 3,
                borderColor: color, // ✅ Solo una declaración de borderColor
                boxShadow: 3,
                boxSizing: "border-box",
              }}
            >
              <CustomTabPanel value={value} index={0}>
                <Typography variant="h6" sx={{ color: "orange" }}>
                  Ecosystem are empty
                </Typography>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                {loading ? (
                  <Typography variant="h6">Loading fauna...</Typography>
                ) : error ? (
                  <Typography variant="h6" color="error">
                    Error: {error}
                  </Typography>
                ) : fauna && fauna.length > 0 ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 2,
                      justifyContent: "center",
                    }}
                  >
                    {fauna.map((animal, index) => (
                      <CardOne
                        key={animal?.id || `fauna-${index}`}
                        name={
                          animal?.nombre_cientifico ||
                          animal?.canonicalName ||
                          "No Name"
                        }
                        image={
                          animal?.imagen ||
                          animal?.image ||
                          "https://via.placeholder.com/150"
                        }
                        direction={`/Trophy/${animal?.id || index}`}
                      />
                    ))}
                  </Box>
                ) : (
                  <Typography variant="h6" sx={{ color: "#D62828" }}>
                    No fauna found
                  </Typography>
                )}
              </CustomTabPanel>

              <CustomTabPanel value={value} index={2}>
                <Typography variant="h6" sx={{ color: "#00E773" }}>
                  Plants are empty
                </Typography>
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Journal;
