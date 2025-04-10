import { Box } from "@mui/material";
import Navbar from "../components-screens/Navbar/Navbar";
import Titule from "../components-screens/Titule/Titule";
import Lesson from "../components-screens/Lesson/Lesson";

const Lessons = () => {
  const arrayLesson = [
    { index: 1, tituleText: "Introduction", disponible: true, direction: "/Game"},
    { index: 2, tituleText: "Ecosystem", disponible: false,  direction: "/Lessons" },
    { index: 3, tituleText: "Comunitties", disponible: false,  direction: "/Lessons" },
    { index: 4, tituleText: "Problems", disponible: false,  direction: "/Lessons" },
  ];

  return (
    <Box
      className="Container"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        paddingLeft: "10rem",
        backgroundImage:
          "url('../src/assets/backgrounds/Biomas-Background.png')",
      }}
    >
      <Box>
        <Navbar backgroundColor="#FFEE8B"/>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "Column",
          justifyContent: "space-around",
          height: "90vh",
          width: "85vw"
        }}
      >
        <Titule tituleText={"Savannah"}></Titule>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 10,
            width: "100%",
            minHeight: "70%",
            gap: 2,
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
  );
};

export default Lessons;
