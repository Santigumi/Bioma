import { useForm } from "react-hook-form";
import "./RegisterForm.css";

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="register-container">
      <h2>Create your account</h2>
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
          <input type="date" {...register("birthday")} />
        </div>
        <div className="form-group">
          <label>Confirm password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
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
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="form-submit">
          <a href="#">Already have an account? Log in</a>
          <input type="submit" value="Sign in" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
