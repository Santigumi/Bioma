import { Box, Typography } from "@mui/material";

const Journal = () => {
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
            <Typography variant="h3">Journal</Typography>
          </Box>
          <Box
            sx={{
              borderRadius: 10,
              width: "100%",
              minHeight: "70%",
              backgroundColor: "#4AB8F0",
              boxShadow: 3
            }}
          ></Box>
        </Box>
      );
};

export default Journal;
