import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFauna = createAsyncThunk("fauna/fetchFauna", async () => {
  const response = await fetch(
    "https://api.catalogo.biodiversidad.co/search?fq=REINO:TERRAE"
  );
  const data = await response.json();
  return data?.results || data?.docs || [];
});

const faunaSlice = createSlice({
  name: "fauna",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFauna.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFauna.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchFauna.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default faunaSlice.reducer;
