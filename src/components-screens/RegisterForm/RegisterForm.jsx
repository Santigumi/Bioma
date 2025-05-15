import { useForm, Controller } from "react-hook-form";
import "./RegisterForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../services/firebaseUtils";
import {
  Box,
  Typography,
  ThemeProvider,
  TextField,
  Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(244, 216, 216)",
          borderRadius: "20px",
          width: "70vw",
          height: "80vh",
          boxShadow: "0.1rem 0.1rem 1rem 0.1rem rgb(133, 132, 132)",
          border: 5,
          borderColor: "rgb(251, 86, 86)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "40%",
            justifyContent: "center",
            paddingLeft: "3rem",
          }}
        >
          Create your account
        </Typography>

        {registerError && <div className="error-alert">{registerError}</div>}
        <form style={{ height: "90%" }} onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "90%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                justifyContent: "start",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box sx={{ width: "80%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Username"
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username && (
                  <p className="error-message">{errors.username.message}</p>
                )}
              </Box>
              <Box sx={{ width: "80%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Email"
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
              </Box>
              <Box sx={{ width: "80%" }}>
                <Controller
                  name="birthday"
                  control={control}
                  defaultValue={null}
                  rules={{ required: "Birthday is required" }}
                  render={({ field }) => (
                    <>
                      <DatePicker
                        label="Birthday"
                        value={field.value}
                        onChange={(date) => field.onChange(date)}
                        sx={{ width: "100%" }}
                        slotProps={{}}
                      />
                      {errors.birthday && (
                        <p className="error-message">
                          {errors.birthday.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                justifyContent: "start",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box sx={{ width: "80%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Create password"
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
              </Box>

              <Box sx={{ width: "80%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Confirm password"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="error-message">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "5%",
                  width: "80%",
                }}
              >
                <Link to="/Login">Already have an account? </Link>
              </Box>
              <Button
                sx={{ height: "15%", width: "80%", border: 1 }}
                type="submit"
                className="register-button"
                disabled={isLoading}
              >
                {isLoading ? "Registrando..." : "Registrarse"}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </LocalizationProvider>
  );
};

export default RegisterForm;
