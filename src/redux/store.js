import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/AuthSlice.js";
import AnimalsReducer from "./animals/AnimalsSlice.js";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    animals: AnimalsReducer,
  },
});
