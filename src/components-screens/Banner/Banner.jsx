import { Box, Typography } from '@mui/material';
import './Banner.css';
import { Link } from "react-router-dom";

const Banner = ({backgroundImage, altImage}) => {
    return(
        <Box className="banner-container">
            <Box className="banner-image-container">
                <img 
                    src={backgroundImage} 
                    alt={altImage} 
                    className="banner-image"/>
                <Box className="banner-content">
                    <Box>
                        <h1>Bioma: Play and Learn</h1>
                    </Box>
                    <Box className='content-p'>
                        <Typography>
                            Bioma is an online learning platform focused on teaching about Colombian biodiversity. 
                            This project is funded and implemented by the Ministry of Education in conjunction with the Ministry of Environment. 
                            This project aims to teach adolescents relevant topics about biology, ecology, pollution, and more.
                        </Typography>
                    </Box>  
                </Box>
                <div className="banner-buttons">
                    <Link id="login" to="/Login">Log in</Link>
                    <Link id="Signin1" to="/Register">Sign In</Link>
                </div>
            </Box>
        </Box>
    )
}

export default Banner;

//https://images.unsplash.com/photo-1486787284432-3749cdce2660?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaXNhamUlMjBkZSUyMGNvbG9tYmlhfGVufDB8fDB8fHww