import { Typography, Card, CardMedia, CardContent, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
const CardOne = ({ name, image, direction }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={()=> navigate(direction)}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#00E773",
        borderRadius: 3,
        boxShadow: 4,
        cursor: "pointer",
        width: {
          xs:'45%',
          sm:'45%',
          md:'45%',
          lg:'22%',
          xl:'22%'
        },
        height: {
          xs:'10rem',
          sm:'10rem',
          md:'45%',
          lg:'45%',
          xl:'45%'
        }
      }}
    >
      <CardActionArea sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            width: "100%",
            height: "80%",
            objectFit: "cover",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
        <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 1 }}>
          <Typography 
          variant="h6"
          sx={{ fontSize:{
            xs:'1rem',
            sm:'1rem',
            md:'1rem',
            lg:'1rem',
            xl:'1rem'
          }}} align="center">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardOne

