import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
        width: "80vw",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          boxShadow: "0.1rem 0.1rem 1rem 0.1rem rgb(133, 132, 132)",
          borderRadius: "2.5rem",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1486787284432-3749cdce2660?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaXNhamUlMjBkZSUyMGNvbG9tYmlhfGVufDB8fDB8fHww"
          alt="Fotografia de paisaje colombiano"
          style={{
            width: "100%",
            height: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "2.5rem",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "60%",
            width: "50%",
            padding: "30px",
            zIndex: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "2.2rem",
                marginBottom: "20px",
                textShadow:
                  "-1px -1px 0 #666565, 1px -1px 0 #000, -1px 1px 0 #000 1px 1px 0 #000",
              }}
            >
              Bioma: Play and Learn
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              borderRadius: "10px",
              padding: "10px 5px",
              fontWeight: "200",
            }}
          >
            <Typography sx={{ color: "white" }}>
              Bioma is an online learning platform focused on teaching about
              Colombian biodiversity. This project is funded and implemented by
              the Ministry of Education in conjunction with the Ministry of
              Environment. This project aims to teach adolescents relevant
              topics about biology, ecology, pollution, and more.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "25vh",
            top: "80vh",
            display: "flex",
            zIndex: "2",
            width: "20%",
            height: "8%",
            backgroundColor: "red",
          }}
        >
          <Button
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              fontSize: "larger",
              border: "4px solid #00E773",
              backgroundColor: "rgba(0, 231, 115, 0.5)",
              borderBottomRightRadius: "0rem",
              borderTopRightRadius: "0rem",
              borderBottomLeftRadius: "2rem",
              borderTopLeftRadius: "2rem",
              boxSizing: "border-box",
            }}
          >
            {" "}
            Login
          </Button>
          <Button
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "91%",
              fontSize: "larger",
              borderBottomRightRadius: "2rem",
              borderTopRightRadius: "2rem",
              borderBottomLeftRadius: "0rem",
              borderTopLeftRadius: "0rem",
              backgroundColor: "#00E773",
              border: "solid #00E773",
            }}
          >
              Sign in
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
