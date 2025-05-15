import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: {
          sm: "80vw",
          md: "80vw",
          lg: "80vw",
          xl: "80vw",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "100%",
            sm: "100%",
            md: "90%",
            lg: "90%",
            xl: "90%",
          },
          boxShadow: "0.1rem 0.1rem 1rem 0.1rem rgb(133, 132, 132)",
          borderRadius: {
            xs: 0,
            sm: 0,
            md: "2.5rem",
            lg: "2.5rem",
            xl: "2.5rem",
          },
        }}
      >
        <Box
          alt="Fotografia de paisaje colombiano"
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            justifyContent: {
              xs: "end",
              sm: "end",
              md: "end",
              lg: "space-between",
              xl: "space-between",
            },
            alignItems: {
              xs: "center",
              sm: "center",
              md: "end",
              lg: "end",
              xl: "end",
            },
            backgroundImage: `url(https://images.unsplash.com/photo-1486787284432-3749cdce2660?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaXNhamUlMjBkZSUyMGNvbG9tYmlhfGVufDB8fDB8fHww)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: {
              xs: 0,
              sm: 0,
              md: "2.5rem",
              lg: "2.5rem",
              xl: "2.5rem",
            },
          }}
        >
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
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-around",
                lg: "space-around",
                xl: "space-around",
              },
              alignItems: "center",
              height: {
                xs: "60%",
                sm: "60%",
                md: "40%",
                lg: "40%",
                xl: "40%",
              },
              width: {
                xs: "90%",
                sm: "90%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "50%",
                  lg: "50%",
                  xl: "50%",
                },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "2.2rem",
                  marginBottom: "1rem",
                  textShadow:
                    "-1px -1px 0 #666565, 1px -1px 0 #000, -1px 1px 0 #000 1px 1px 0 #000",
                }}
              >
                Bioma: Play and Learn
              </Typography>
              <Box
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.65)",
                  borderRadius: "10px",
                  padding: "1rem 1rem",
                  fontWeight: "200",
                  fontSize: {
                    xs: "1rem",
                    sm: "1rem",
                    md: "1rem",
                    lg: "2.2rem",
                    xl: "2.2rem",
                  },
                }}
              >
                <Typography sx={{ color: "white" }}>
                  Bioma is an online learning platform focused on teaching about
                  Colombian biodiversity. This project is funded and implemented
                  by the Ministry of Education in conjunction with the Ministry
                  of Environment. This project aims to teach adolescents
                  relevant topics about biology, ecology, pollution, and more.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "30%",
                  lg: "30%",
                  xl: "30%",
                },
                height: {
                  xs: "25%",
                  sm: "25%",
                  md: "50%",
                  lg: "50%",
                  xl: "50%",
                },
              }}
            >
              <Button
                onClick={() => navigate("Login")}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "50%",
                  fontSize: "larger",
                  border: "4px solid #00E773",
                  backgroundColor: "rgba(0, 231, 115, 0.5)",
                  borderBottomRightRadius: "0rem",
                  borderTopRightRadius: "0rem",
                  borderBottomLeftRadius: "2rem",
                  borderTopLeftRadius: "2rem",
                  boxSizing: "border-box",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(4, 193, 98, 0.5)",
                    boxShadow: "none",
                  },
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/Register")}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "50%",
                  fontSize: "larger",
                  borderBottomRightRadius: "2rem",
                  borderTopRightRadius: "2rem",
                  borderBottomLeftRadius: "0rem",
                  borderTopLeftRadius: "0rem",
                  backgroundColor: "rgb(0, 231, 115)",
                  border: "solid #00E773",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgb(4, 190, 97)",
                    boxShadow: "none",
                  },
                }}
              >
                Sign in
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
