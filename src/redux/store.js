import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/AuthSlice.js";
import itemsReducer from './itemsSlice';
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    items: itemsReducer
  },
});
