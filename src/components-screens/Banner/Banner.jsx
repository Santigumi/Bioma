import './Banner.css';
import { Link } from "react-router-dom";
const Banner = () => {
    return(
        <div className="banner-container">
            <div className="banner-image-container">
                <img 
                    src="https://i.pinimg.com/736x/25/d6/0b/25d60b1a2d96fbb4de2580984cdf7fd9.jpg" 
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
                    <Link id="Signin" to="/Register">Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;