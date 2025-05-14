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
  const [color, setColor] = useState(theme.palette.green.yellow);
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
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box>
          <Navbar backgroundColor={theme.palette.green.main} />
        </Box>

        <Box
          ClassName="Estructure"
          sx={{
            display: "flex",
            flexDirection: "Column",
            justifyContent: "space-around",
            height: "90vh",
            width: "85vw",
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
              sx={{ backgroundColor: theme.palette.green.main, boxShadow: 3, borderRadius: 7.5, width: "70%"}}
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
                    backgroundColor: theme.palette.yellow.main,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 25,
                    color: "black",
                    "&.Mui-selected": {
                      color: "F7F8F9",
                    },
                  }}
                  label="All"
                  {...a11yProps(0)}
                  onClick={() => handleTabClick(theme.palette.yellow.main)}
                ></Tab>
                <Tab
                  sx={{
                    backgroundColor: theme.palette.blue.main,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 25,
                  }}
                  label="Avatars"
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
                <Typography variant="h6" sx={{ color: "orange" }}>
                  <CardThree price="100"></CardThree>
                </Typography>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Typography variant="h6" sx={{ color: "#D62828" }}>
                  Characters
                </Typography>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Typography variant="h6" sx={{ color: "#00E773" }}>
                  Ilustrations
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
