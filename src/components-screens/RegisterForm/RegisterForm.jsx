import { useForm } from "react-hook-form";
import "./RegisterForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../services/firebaseUtils";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const password = watch("password", "");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setRegisterError(null);

    if (data.password !== data.confirmPassword) {
      setRegisterError("Las contraseñas no coinciden");
      setIsLoading(false);
      return;
    }

    try {
      const result = await registerUser(
        data.email,
        data.password,
        data.username,
        data.birthday
      );

      if (result.success) {
        navigate("/Login");
      } else {
        setRegisterError(result.error);
      }
    } catch (error) {
      setRegisterError("Error al registrar usuario: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Create your account</h2>
      {registerError && <div className="error-alert">{registerError}</div>}
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="error-message">{errors.username.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Create password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Birthday</label>
          <input
            type="date"
            {...register("birthday", { required: "Birthday is required" })}
          />
          {errors.birthday && (
            <p className="error-message">{errors.birthday.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Confirm password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>
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
        <button type="submit" className="register-button" disabled={isLoading}>
          {isLoading ? "Registrando..." : "Registrarse"}
        </button>
        <div className="form-submit">
          <Link to="/Login">Already have an account? </Link>
          <Link id="Signin" to="/Login">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
