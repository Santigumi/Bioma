import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../../redux/auth/thunkSlice";
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
import theme from "../../Themes/Theme";

const RegisterForm = () => {
  const dispatch = useDispatch(); // Agregar esto
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
      const result = await dispatch(
        registerUserThunk({
          email: data.email,
          password: data.password,
          username: data.username,
          birthday: data.birthday,
        })
      );

      if (registerUserThunk.fulfilled.match(result)) {
        navigate("/Login");
      } else if (registerUserThunk.rejected.match(result)) {
        setRegisterError(result.payload || "Error al registrar usuario");
      }
    } catch (error) {
      setRegisterError("Error inesperado: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography
          variant="h4"
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            },
            flexDirection: "column",
            height: "10%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Create your account
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(244, 216, 216)",
            borderRadius: "20px",
            width: {
              xs: "100%",
              sm: "100%",
              md: "70%",
              lg: "70%",
              xl: "70%",
            },
            height: {
              xs: "80vh",
              sm: "80vh",
              md: "75%",
              lg: "75%",
              xl: "75%",
            },
            boxShadow: "0.1rem 0.1rem 1rem 0.1rem rgb(133, 132, 132)",
            border: 5,
            borderColor: "rgb(251, 86, 86)",
            justifyContent: "space-around",
          }}
        >
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
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                },
                height: {
                  xs: "100%",
                  sm: "100%",
                  md: "90%",
                  lg: "90%",
                  xl: "90%",
                },
                gap: {
                  xs: 1,
                  sm: 1,
                  md: 0,
                  lg: 0,
                  xl: 0,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                  },
                  height: {
                    xs: "65%",
                    sm: "65%",
                    md: "60%",
                    lg: "60%",
                    xl: "60%",
                  },
                  justifyContent: {
                    xs: "space-around",
                    sm: "space-around",
                    md: "start",
                    lg: "start",
                    xl: "start",
                  },
                  alignItems: "center",
                  gap: {
                    xs: 2,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 4,
                  },
                }}
              >
                <Box sx={{ width: "80%" }}>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Username"
                    type="text"
                    variant="outlined"
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />
                  {errors.username && (
                    <Typography sx={{ margin: 0 }} className="error-message">
                      {errors.username.message}
                    </Typography>
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
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <Typography sx={{ margin: 0 }} className="error-message">
                      {errors.email.message}
                    </Typography>
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
                          slotProps={{
                            width: "100%",
                            textField: {
                              variant: "outlined",
                              sx: {
                                "& .MuiOutlinedInput-root": {
                                  "& fieldset": {
                                    borderColor: "#ED7C7C",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "#ED7C7C",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "#ED7C7C",
                                  },
                                },
                                "& .MuiInputLabel-root": {
                                  color: "#9d9e9d",
                                  "&.Mui-focused": {
                                    color: "#ED7C7C",
                                  },
                                },
                              },
                            },
                          }}
                        />
                        {errors.birthday && (
                          <Typography
                            sx={{ margin: 0 }}
                            className="error-message"
                          >
                            {errors.birthday.message}
                          </Typography>
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
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                  },
                  height: {
                    xs: "70%",
                    sm: "70%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                  },
                  justifyContent: {
                    xs: "space-around",
                    sm: "space-around",
                    md: "start",
                    lg: "start",
                    xl: "start",
                  },
                  alignItems: "center",
                  gap: {
                    xs: 2,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 4,
                  },
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
                    <Typography sx={{ margin: 0 }} className="error-message">
                      {errors.password.message}
                    </Typography>
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
                    <Typography sx={{ margin: 0 }} className="error-message">
                      {errors.confirmPassword.message}
                    </Typography>
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    width: "80%",
                    height: "30%",
                  }}
                >
                  <Link
                    to="/Login"
                    style={{
                      textAlign: "start",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    Already have an account?
                  </Link>

                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "2rem",
                      backgroundColor: "rgb(17, 207, 112)",
                      color: "white",
                      boxShadow: 3,
                      "&:hover": {
                        backgroundColor: "rgb(4, 190, 97)",
                        boxshadow: 6,
                      },
                    }}
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Registrando..." : "Registrarse"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default RegisterForm;
