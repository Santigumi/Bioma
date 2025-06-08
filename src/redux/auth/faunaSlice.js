import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFauna = createAsyncThunk(
  "fauna/fetchFauna",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://api.catalogo.biodiversidad.co/search?fq=REINO:TERRAE"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchFauna.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFauna.fulfilled, (state, action) => {
        state.loading = false;
        state.faunaApi = action.payload;
      })
      .addCase(fetchFauna.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setApiFauna, addNewFauna, removeFauna } = faunaSlice.actions;
export default faunaSlice.reducer;
