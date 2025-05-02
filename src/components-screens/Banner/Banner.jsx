import { Box } from '@mui/material';
import './Banner.css';
import { Link } from "react-router-dom";
const Banner = () => {
    return(
        <div className="banner-container">
            <div className="banner-image-container">
                <img 
                    src="https://images.unsplash.com/photo-1486787284432-3749cdce2660?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaXNhamUlMjBkZSUyMGNvbG9tYmlhfGVufDB8fDB8fHww" 
                    alt="Nature background" 
                    className="banner-image"/>
                <div className="banner-content">
                    <div>
                        <h1>Bioma: Play and Learn</h1>
                    </div>
                    <div className='content-p'>
                        <p>
                            Bioma is an online learning platform focused on teaching about Colombian biodiversity. 
                            This project is funded and implemented by the Ministry of Education in conjunction with the Ministry of Environment. 
                            This project aims to teach adolescents relevant topics about biology, ecology, pollution, and more.
                        </p>
                    </div>  
                </div>
                <div className="banner-buttons">
                    <Link id="login" to="/Login">Log in</Link>
                    <Link id="Signin1" to="/Register">Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;