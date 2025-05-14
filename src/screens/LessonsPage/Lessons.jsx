import { Box, Typography, ThemeProvider } from "@mui/material";
import Navbar from "../../components-screens/Navbar/Navbar";
import Lesson from "../../components-screens/Lesson/Lesson";
import theme from "../../Themes/Theme";
const Lessons = () => {
  const arrayLesson = [
    {
      index: 1,
      tituleText: "Introduction",
      disponible: true,
      direction: "/Game",
    },
    {
      index: 2,
      tituleText: "Ecosystem",
      disponible: false,
      direction: "/Lessons",
    },
    {
      index: 3,
      tituleText: "Comunitties",
      disponible: false,
      direction: "/Lessons",
    },
    {
      index: 4,
      tituleText: "Problems",
      disponible: false,
      direction: "/Lessons",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="Container"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
            xl: "row",
          },
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          justifyContent: "start",
          alignItems: "center",
          backgroundImage:
            "url('../src/assets/backgrounds/Biomas-Background.webp')",
        }}
      >
        <Navbar backgroundColor="#FFEE8B" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "Column",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "start",
              lg: "start",
              xl: "start",
            },
            gap: {
              xs: 5,
              sm: 5,
              md: 1,
              lg: 1,
              xl: 1,
            },
            paddingTop: {
              xs: "2rem",
              sm: "2rem",
              md: 0,
              lg: 0,
              xl: 0,
            },
            height: "90vh",
            width: "85vw",
            border: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: {
                xs: "5rem",
                sm: "5rem",
                md: "10%",
                lg: "10%",
                xl: "10%",
              },
              width: "90%",
              borderRadius: 7.5,
              paddingLeft: {
                xs: "0",
                sm: "0",
                md: "3rem",
                lg: "3rem",
                xl: "3rem",
              },
              backgroundColor: "#FFEE8B",
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
              Savannah
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              minHeight: "70%",
              gap: {
                xs:5,
                sm:5,
                md:5,
                lg:5,
                xl:5,
              },
              border: 1
            }}
          >
            {arrayLesson.map((lesson) => {
              return (
                <Lesson
                  index={lesson.index}
                  tituleText={lesson.tituleText}
                  boolean={lesson.disponible}
                  direction={lesson.direction}
                ></Lesson>
              );
            })}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Lessons;
