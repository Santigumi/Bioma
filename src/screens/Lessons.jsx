
import { Box, Typography, Tabs } from "@mui/material";

import Titule from "../components-screens/Titule/Titule";

const Lessons = () => {
    return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            gap: "5%",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
         <Titule tituleText={"Savannah"}></Titule>
          <Box
            sx={{
              borderRadius: 10,
              width: "100%",
              minHeight: "70%",
              backgroundColor: "#FFEE8B",
              boxShadow: 3
            }}
          ></Box>
        </Box>
      );
};

export default Lessons;