import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/AuthSlice.js";
import AnimalsReducer from "./auth/faunaSlice.js";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    fauna: AnimalsReducer,
  },
});
