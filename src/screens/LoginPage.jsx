import Navbar from "../components-screens/Navbar/Navbar";
import LoginForm from "../components-screens/LoginForm/LoginForm";
import backgroundImage from "../assets/backgrounds/fondoregister.webp";

const LoginPage = () => {
  return (
    <>
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar></Navbar>
        <LoginForm></LoginForm>
      </div>
    </>
  );
};

export default LoginPage;
