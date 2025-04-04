
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"
import { Box } from "@mui/material"

const ButtonMenu = () => {
    return (
        <Button sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "100"
        }} 
        variant="outlined"
        startIcon = {
        <Box sx={{ display: 'flex' }}>
        <DeleteIcon fontSize="inherit" sx={{ fontSize: 50 }}/>
        </Box>}
        >Hola mi primer boton</Button>
    )
}

export default ButtonMenu