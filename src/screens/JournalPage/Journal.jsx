import { Box, Typography, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import Navbar from "../../components-screens/Navbar/Navbar";
import theme from "../../Themes/Theme";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFauna } from "../../redux/auth/faunaSlice";
import CardOne from "../../components-screens/CardOne/CardOne";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-%{index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <box sx={{ p: 3 }}>{children}</box>}
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
  const { faunaApi, loading, error } = useSelector((state) => state.fauna);
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
          width: "100%",
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
          boxSizing: "border-box",
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
          ClassName="Estructure"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: {
              sx: "start",
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
                  ms: "100%",
                  md: "40%",
                  lg: "40%",
                  xl: "40%",
                },
                gap: 3,
              }}
            >
              <Tabs onChange={handleChange} sx={{ width: "100%" }}>
                <Tab
                  sx={{
                    backgroundColor: "#FFE549",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 25,
                    color: "black",
                    flexGrow: 1,
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
                  }}
                  label="Ecosystem"
                  value={0}
                  {...a11yProps(0)}
                  onClick={() => handleTabClick(theme.palette.yellow.main)}
                ></Tab>
                <Tab
                  sx={{
                    backgroundColor: "#D62828",
                    color: "black",
                    flexGrow: 1,
                  }}
                  label="Animals"
                  value={1}
                  {...a11yProps(1)}
                  onClick={() => handleTabClick(theme.palette.red.main)}
                ></Tab>
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
                  value={2}
                  {...a11yProps(2)}
                  onClick={() => handleTabClick(theme.palette.green.main)}
                ></Tab>
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
                borderColor: "#4AB8F0",
                boxShadow: 3,
                boxSizing: "border-box",
                borderColor: color,
              }}
            >
              <CustomTabPanel value={value} index={0}>
                <Typography variant="h6" sx={{ color: "orange" }}>
                  Ecosystem are empty
                </Typography>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                {loading ? (
                  <Typography variant="h6" sx={{ color: "#D62828" }}>
                    Cargando animales...
                  </Typography>
                ) : error ? (
                  <Typography variant="h6" sx={{ color: "#D62828" }}>
                    {error}
                  </Typography>
                ) : faunaApi.length === 0 ? (
                  <Typography variant="h6" sx={{ color: "#D62828" }}>
                    No hay animales disponibles
                  </Typography>
                ) : (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                    {faunaApi.map((animal) => (
                      <CardOne
                        key={animal.id}
                        name={animal.name}
                        image={animal.image} // o el link que necesites
                      />
                    ))}
                  </Box>
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
