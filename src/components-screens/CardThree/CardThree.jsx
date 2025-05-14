import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import theme from "../../Themes/Theme";
import { ThemeProvider } from "@mui/material";
const CardThree = ({ price }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image="" title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Capybara
          </Typography>
        </CardContent>
        <CardActions sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end'
        }}>
          <Button
            size="medium"
            sx={{ backgroundColor: theme.palette.green.main,
                color: theme.palette.green.contrastText
             }}
          >
            Buy: ${price}
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default CardThree;
