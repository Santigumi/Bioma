import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/AuthSlice.js";
import AnimalsReducer from "./auth/apiSlice.js";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    fauna: AnimalsReducer,
  },
});
