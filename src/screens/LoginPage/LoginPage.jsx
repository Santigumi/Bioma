import Navbar from '../../components-screens/Navbar/Navbar';
import LoginForm from '../../components-screens/LoginForm/LoginForm';
import backgroundImage from '../../assets/backgrounds/fondoregister.jpg';
import { Box } from '@mui/material';
const LoginPage = () => {
    return(
            <Box className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Navbar></Navbar>
                <Box
                
                ></Box>
            </Box>
    )
}

export default LoginPage;