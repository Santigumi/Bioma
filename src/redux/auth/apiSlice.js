import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk para obtener fauna
export const fetchFauna = createAsyncThunk(
  "fauna/fetchFauna",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://api.catalogo.biodiversidad.co/search?fq=REINO:TERRAE"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data); // Para debugging

      // La API de biodiversidad.co devuelve los datos en diferentes estructuras
      // Probamos varios campos posibles
      return (
        data?.results || data?.docs || data?.response?.docs || data?.data || []
      );
    } catch (error) {
      console.error("Error fetching fauna:", error);
      return rejectWithValue(error.message);
    }
  }
);

const faunaSlice = createSlice({
  name: "fauna",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Reducer para limpiar errores
    clearError: (state) => {
      state.error = null;
    },
    // Reducer para limpiar datos
    clearFauna: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
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
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchFauna.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        state.items = [];
      });
  },
});

export const { clearError, clearFauna } = faunaSlice.actions;
export default faunaSlice.reducer;
