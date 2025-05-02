import Navbar from '../../components-screens/Navbar/Navbar';
import Banner from '../../components-screens/Banner/Banner';
import backgroundImage from '../../assets/backgrounds/fondolanding.jpg';
import './LandingPage.css';

const LandingPage = () => {
    return(
        <>
            <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>

        </>
    )
}

export default LandingPage;