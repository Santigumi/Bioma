import { Box, Typography, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        gap: "2.5%",
        paddingTop: "1rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
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
        <Typography variant="h4">Journal</Typography>
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
                backgroundColor: "#FFE549",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 25,
                color: "black",
                "&.Mui-selected": {
                    color: "F7F8F9"
                }
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
            minHeight: "100%",
            backgroundColor: "#F7F8F9",
            border: 4,
            borderColor: "#4AB8F0",
            boxShadow: 3,
            boxSizing: "border-box",
          }}
        >
          <CustomTabPanel value={value} index={0}>
            Ecosystem are empty
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Animals are empty
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Plants are empty
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default Journal;
