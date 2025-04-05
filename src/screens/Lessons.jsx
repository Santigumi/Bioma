import { Box } from "@mui/material";

import Titule from "../components-screens/Titule/Titule";
import Lesson from "../components-screens/Lesson/Lesson";

const Lessons = () => {
  const arrayLesson = [
    { index: 1, tituleText: "Introduction" },
    { index: 2, tituleText: "Ecosystem" },
    { index: 3, tituleText: "Comunitties" },
    { index: 4, tituleText: "Problems" },
  ];

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
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          width: "100%",
          minHeight: "70%",
          gap: 2
        }}
      >
        {arrayLesson.map((lesson) => {
          return (
            <Lesson
              index={lesson.index}
              tituleText={lesson.tituleText}
            ></Lesson>
          );
        })}
      </Box>
    </Box>
  );
};

export default Lessons;
