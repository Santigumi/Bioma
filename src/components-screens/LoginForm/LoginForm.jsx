import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import pecesImg from "../../assets/backgrounds/peceslogin.jpg";
import "./LoginForm.css";
import { loginUser } from "../../services/firebaseUtils";
const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError(null);

    try {
      const result = await loginUser(data.email, data.password);

      if (result.success) {
        navigate("/Profile");
      } else {
        setLoginError(result.error);
      }
    } catch (error) {
      setLoginError("Error al iniciar sesión: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Log in</h2>
        {loginError && <div className="error-alert">{loginError}</div>}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <div className="data-user">
          <Link to="/register">Don't have an account? Sign in</Link>
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Iniciando sesión..." : "Log in"}
          </button>
        </div>
      </form>
      <div className="login-img">
        <img src={pecesImg} alt="Coral reef background" />
      </div>
    </div>
  );
};

export default LoginForm;
