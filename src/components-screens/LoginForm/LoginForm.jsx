import { useState } from "react";
import { useForm } from "react-hook-form"; // Importación faltante
import { useNavigate, Link } from "react-router-dom";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../redux/auth/thunkSlice";
import {
  Box,
  Typography,
  ThemeProvider,
  TextField,
  Button,
} from "@mui/material";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  // Añadir el hook useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError(null);

    try {
      const result = await dispatch(
        loginUserThunk({
          email: data.email,
          password: data.password,
        })
      );

      if (loginUserThunk.fulfilled.match(result)) {
        navigate("/Profile");
      } else if (loginUserThunk.rejected.match(result)) {
        setLoginError(result.payload || "Error al iniciar sesión");
      }
    } catch (error) {
      setLoginError("Error inesperado: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Typography
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
          },
          flexDirection: "column",
          height: {
            xs: "20%",
            sm: "20%",
            md: "10%",
            lg: "10%",
            xl: "10%",
          },
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          fontSize: {
            xs: "3rem",
            sm: "3rem",
            md: "3rem",
            lg: "3rem",
            xl: "3rem",
          },
        }}
      >
        Log in
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgb(244, 216, 216)",
          borderRadius: "2rem",
          width: {
            xs: "100%",
            sm: "100%",
            md: "70%",
            lg: "70%",
            xl: "70%",
          },
          height: {
            xs: "50vh",
            sm: "50vh",
            md: "75%",
            lg: "75%",
            xl: "75%",
          },
          boxShadow: "0.1rem 0.1rem 1rem 0.1rem rgb(133, 132, 132)",
          border: 5,
          borderColor: "rgb(251, 86, 86)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "50%",
              xl: "50%",
            },
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              height: "80%",
              width: "100%",
            }}
            onSubmit={handleSubmit(onSubmit)} // Usar handleSubmit de useForm
          >
            {loginError && <div className="error-alert">{loginError}</div>}
            <Typography
              variant="h4"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                flexDirection: "column",
                height: "20%",
                justifyContent: "center",
              }}
            >
              Log in
            </Typography>
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
              <TextField
                sx={{ width: "100%" }}
                label="Password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                width: "80%",
                height: {
                  xs: "20%",
                  md: "20%",
                  sm: "20%",
                  lg: "30%",
                  xl: "30%",
                },
              }}
            >
              <Link to="/register">Don't have an account? Sign in</Link>
              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "rgb(17, 207, 112)",
                  color: "white",
                  borderRadius: "2rem",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "rgb(4, 190, 97)",
                    boxshadow: 6,
                  },
                }}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Iniciando sesión..." : "Log in"}
              </Button>
            </Box>
          </form>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
            height: "100%",
            width: "51%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              borderTopRightRadius: "1.9rem",
              borderBottomRightRadius: "1.9rem",
            }}
            src="https://i.pinimg.com/736x/c4/df/26/c4df263b7e2981197e3d7c559147baf8.jpg"
            alt="Coral reef background"
          />
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
