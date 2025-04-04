
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"

const ButtonMenu = () => {
    return (
        <Button sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "large",
        }} 
        variant="outlined"
        startIcon = {<DeleteIcon fontSize="large" />}>Hola mi primer boton</Button>
    )
}

export default ButtonMenu