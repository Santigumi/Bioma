// faunaSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Thunk

const faunaSlice = createSlice({
  name: "fauna",
  initialState: {
    faunaApi: [],
    loading: false,
    error: null,
  },
  reducers: {
    setApiFauna: (state, action) => {
      state.faunaApi = action.payload;
    },
    addNewFauna: (state, action) => {
      const alreadyExists = state.faunaApi.some(
        (d) => d.id === action.payload.id
      );
      if (!alreadyExists) {
        state.faunaApi.push(action.payload);
      }
    },
    removeFauna: (state, action) => {
      state.faunaApi = state.faunaApi.filter(
        (dig) => dig.id !== action.payload
      );
    },
  },
});

export default faunaSlice.reducer;
