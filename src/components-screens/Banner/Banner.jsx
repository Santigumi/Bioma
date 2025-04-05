import './Banner.css';

const Banner = () => {
    return(
        <div className="banner-container">
            <div className="banner-image-container">
                <img 
                    src="https://i.pinimg.com/736x/7f/0d/10/7f0d10e28387eb68f8bbdd67d3baf094.jpg" 
                    alt="Nature background" 
                    className="banner-image"/>
                
                <div className="banner-content">
                    <div>
                        <h1>Bioma: Play and Learn</h1>
                    </div>
                    <p>
                        Bioma is an online learning platform focused on teaching about Colombian biodiversity. 
                        This project is funded and implemented by the Ministry of Education in conjunction with the Ministry of Environment. 
                        This project aims to teach adolescents relevant topics about biology, ecology, pollution, and more.
                    </p>
                </div>
                <div className="banner-buttons">
                    <button>Log in</button>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;