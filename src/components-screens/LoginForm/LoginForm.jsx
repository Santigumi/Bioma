import pecesImg from "../../assets/backgrounds/peceslogin.jpg";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Log in</h2>
        <div className="form-group">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="data-user">
          <Link to="/Register">Don't have an account? Create one</Link>
          <Link id="Signin" to="/Profile">
            Log in
          </Link>
        </div>
      </form>
      <div className="login-img">
        <img src={pecesImg} alt="Coral reef background" />
      </div>
    </div>
  );
};

export default LoginForm;
