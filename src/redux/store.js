import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/AuthSlice.js";
import itemsReducer from './game/itemsSlice.js';
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    items: itemsReducer
  },
});
