import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "animals",

  initialState: {
    apiAnimals: [],
  },

  reducers: {
    setApiAnimals: (state, action) => {
      state.apiAnimals = action.payload;
    },
    addNewAnimal: (state, action) => {
      const alreadyExists = state.newAnimals.some(
        (d) => d.id === action.payload.id
      );
      if (!alreadyExists) {
        state.newAnimals.push(action.payload);
      }
    },
    removeAnimal: (state, action) => {
      state.newAnimals = state.newAnimals.filter(
        (dig) => dig.id !== action.payload
      );
    },
  },
});

export const { setApiAnimals, addNewAnimal, removeAnimal } = apiSlice.actions;

export default apiSlice.reducer;
