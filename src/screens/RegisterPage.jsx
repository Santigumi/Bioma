import Navbar from "../components-screens/Navbar/Navbar";
import RegisterForm from "../components-screens/RegisterForm/RegisterForm";
import backgroundImage from "../assets/backgrounds/fondoregister.webp";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <>
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar></Navbar>
        <div id="estructure">
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
