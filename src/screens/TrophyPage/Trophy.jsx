import { Box, Typography, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import Navbar from "../../components-screens/Navbar/Navbar";
import { useState } from "react";
import CardThree from "../../components-screens/CardThree/CardThree";
import theme from "../../Themes/Theme";
import { ThemeProvider } from "@mui/material";
import Trophies from "../../components-screens/Trophies/Trophies";
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

const Trophy = () => {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState(theme.palette.yellow.main);
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
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          backgroundImage: "url('../src/assets/backgrounds/fondolanding.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <Box>
          <Navbar backgroundColor={theme.palette.green.secondary} />
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
              flexDirection: "row",
              justifyContent: "space-between",
              height: "10%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                backgroundColor: theme.palette.green.secondary,
                boxShadow: 3,
                borderRadius: 7.5,
                width: "70%",
                paddingLeft: 2.5,
                paddingTop: 1.5,
              }}
            >
              Trophy store
            </Typography>
            <Trophies Trophies={"5000"}></Trophies>
          </Box>
          <Box
            sx={{
              width: "100%",
              minHeight: "75%",
              boxSizing: "border-box",
            }}
          >
            <Box>
              <Tabs onChange={handleChange}>
                <Tab
                  sx={{
                    backgroundColor: theme.palette.yellow.secondary,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 25,
                    color: theme.palette.green.contrastText,
                    "&.Mui-selected": {
                      color: "F7F8F9",
                    },
                  }}
                  label="All"
                  value={0}
                  {...a11yProps(0)}
                  onClick={() => handleTabClick(theme.palette.yellow.secondary)}
                ></Tab>
                <Tab
                  sx={{
                    backgroundColor: theme.palette.blue.main,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 25,
                  }}
                  label="Avatars"
                  value={1}
                  {...a11yProps(1)}
                  onClick={() => handleTabClick(theme.palette.blue.main)}
                ></Tab>
                <Tab
                  sx={{
                    backgroundColor: theme.palette.red.main,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 25,
                  }}
                  label="Wallpapers"
                  value={2}
                  {...a11yProps(2)}
                  onClick={() => handleTabClick(theme.palette.red.main)}
                ></Tab>
              </Tabs>
            </Box>
            <Box
              sx={{
                padding: "2rem",
                borderRadius: 10,
                borderTopLeftRadius: 0,
                width: "100%",
                minHeight: "94%",
                backgroundColor: "#F7F8F9",
                border: 4,
                borderColor: color,
                boxShadow: 3,
                boxSizing: "border-box",
              }}
            >
              <CustomTabPanel
                value={value}
                index={0}
                sx={{ backgroundColor: "red" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    flexDirection: "wrap",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <CardThree name={"Capybara"} price="100"></CardThree>
                  <CardThree name={"Valle Cocora"} price="150"></CardThree>
                </Typography>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Typography variant="h6" sx={{ color: "#D62828" }}>
                  <CardThree name={"Capybara"} price="100"></CardThree>
                </Typography>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Typography variant="h6" sx={{ color: "#00E773" }}>
                  <CardThree name={"Valle Cocora"} price="150"></CardThree>
                </Typography>
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Trophy;
