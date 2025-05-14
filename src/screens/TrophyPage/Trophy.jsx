import { Box, Typography, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import Navbar from "../../components-screens/Navbar/Navbar";
import { useState } from "react";
import CardThree from "../../components-screens/CardThree/CardThree";
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
        <Navbar backgroundColor="#4AB8F0" />
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
            flexDirection: "column",
            justifyContent: "center",
            height: "10%",
            borderRadius: 7.5,
            paddingLeft: "3rem",
            backgroundColor: "#4AB8F0",
            boxShadow: 3,
          }}
        >
          <Typography variant="h4">Trophy store</Typography>
        </Box>
          <Typography variant="h4">$5000</Typography>
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
                  backgroundColor: "#FFE549",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 25,
                  color: "black",
                  "&.Mui-selected": {
                    color: "F7F8F9",
                  },
                }}
                label="Ecosystem"
                {...a11yProps(0)}
              ></Tab>
              <Tab
                sx={{
                  backgroundColor: "#D62828",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 25,
                }}
                label="Animals"
                {...a11yProps(1)}
              ></Tab>
              <Tab
                sx={{
                  backgroundColor: "#00E773",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 25,
                }}
                label="Plants"
                {...a11yProps(2)}
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
              borderColor: "#4AB8F0",
              boxShadow: 3,
              boxSizing: "border-box",
            }}
          >
            <CustomTabPanel value={value} index={0} >
              <Typography variant="h6"sx={{color: "orange"}}>
              <CardThree price="100"></CardThree>
              </Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            <Typography variant="h6"sx={{color: "#D62828"}}>
              Characters
              </Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
            <Typography variant="h6"sx={{color: "#00E773"}}>
              Ilustrations
              </Typography>
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Trophy;
