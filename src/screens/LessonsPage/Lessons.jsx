import { Box, Typography, ThemeProvider } from "@mui/material";
import Navbar from "../../components-screens/Navbar/Navbar";
import Lesson from "../../components-screens/Lesson/Lesson";
import theme from "../../Themes/Theme";
import { useParams } from "react-router-dom";
import { arrayBiomas } from "../../Data/DataBiomas";
const Lessons = () => {
  const { biomaId } = useParams();
  const bioma = arrayBiomas.find((b) => b.id == biomaId);
  const arrayLessons = bioma.lessons;
  if (!bioma) {
    return <div>Bioma no encontrado</div>;
  }
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
          alignItems: "center",
          backgroundImage: `url(${bioma.backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat", 
          backgroundPosition: "center", 
        }}
      >
        <Navbar backgroundColor={bioma.color} />
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
            justifyContent: {
              xs: "start",
              sm: "start",
              md: "space-between",
              lg: "space-between",
              xl: "space-between",
            },
            gap: {
              xs: 5,
              sm: 5,
              md: 3,
              lg: 3,
              xl: 3,
            },
            paddingTop: {
              xs: "2rem",
              sm: "2rem",
              md: 0,
              lg: 0,
              xl: 0,
            },
            height: {
              xs: "100%",
              sm: "100%",
              md: "90vh",
              lg: "90vh",
              xl: "90vh",
            },
            width: "85vw",
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
              backgroundColor: bioma.color,
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
              {`${bioma.nombre}`}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              minHeight: "80%",
              gap: {
                xs: 5,
                sm: 5,
                md: 3,
                lg: 3,
                xl: 3,
              },
            }}
          >
            {arrayLessons.map((lesson) => {
              return (
                <Lesson
                  index={lesson.index}
                  tituleText={lesson.name}
                  boolean={lesson.disponible}
                  color={bioma.color}
                  direction={`/lessons/${bioma.id}/${lesson.lessonId}`}
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
