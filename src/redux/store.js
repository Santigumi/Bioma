import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/AuthSlice.js";
import itemsReducer from "./game/itemsSlice.js";
import statsReducer from "./game/statsSlice.js";
import AnimalsReducer from "./auth/faunaSlice.js";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    items: itemsReducer,
    progress: statsReducer,
    fauna: AnimalsReducer,
  },
});
