import { Box, Typography, Tabs, Tab } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";

function CustomTabPanel(props) {
    const {children, value, index, ...other } = props;

    return (
        <div role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-%{index}`}
        aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && <box sx={{ p: 3}}>{children}</box>}
        </div>
    )
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
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
    <Box>
    <Tabs onChange={handleChange}>
      <Tab label="Ecosystem" {...a11yProps(0)}></Tab>
      <Tab label="Animals" {...a11yProps(1)}></Tab>
      <Tab label="Plants" {...a11yProps(2)}></Tab>
    </Tabs>
    </Box>
    <Box
      sx={{
        padding: "2rem",
        borderRadius: 10,
        width: "100%",
        minHeight: "85%",
        backgroundColor: "#4AB8F0",
        boxShadow: 3,
        boxSizing: "border-box"
      }}
    >
    <CustomTabPanel value={value} index={0}>Ecosystem are empty</CustomTabPanel>
    <CustomTabPanel value={value} index={1}>Animals are empty</CustomTabPanel>
    <CustomTabPanel value={value} index={2}>Plants are empty</CustomTabPanel>
    </Box>
  </Box>
)}

export default Journal;
