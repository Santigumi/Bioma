import Navbar from '../components-screens/Navbar/Navbar';
import RegisterForm from '../components-screens/RegisterForm/RegisterForm';
import backgroundImage from '../assets/backgrounds/fondoregister.jpg';
import './RegisterPage.css';

const RegisterPage = () => {
    return(
        <>
            <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Navbar></Navbar>
                <RegisterForm></RegisterForm>
            </div>

        </>
    )
}

export default RegisterPage;