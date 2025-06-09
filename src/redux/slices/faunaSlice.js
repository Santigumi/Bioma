import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFauna = createAsyncThunk(
  "fauna/fetchFauna",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://api.catalogo.biodiversidad.co/record_search/search?q=Animalia&size=30"
      );
      const data = await response.json();
      console.log("API Response", data);
      const filtered = data.filter(
        (item) => item.imageInfo?.mainImage || item.imageInfo?.thumbnailImage
      );

      console.log(
        `Elementos filtrados con imagen: ${filtered.length} de ${data.length}`
      );
      return filtered.slice(0, 10);
    } catch (error) {
      console.error("Error fetching fauna:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchFlora = createAsyncThunk(
  "fauna/fetchFlora",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://api.catalogo.biodiversidad.co/record_search/search?q=Plantae&size=30"
      );
      const data = await response.json();
      const filtered = data.filter(
        (item) => item.imageInfo?.mainImage || item.imageInfo?.thumbnailImage
      );
      return filtered.slice(0, 10);
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
      .addCase(fetchFauna.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchFauna.fulfilled, (state, action) => {
        state.loading = false;
        state.faunaApi = action.payload;
        console.log(
          "Fauna cargada exitosamente:",
          action.payload.length,
          "elementos"
        );
      });
  },
});

export const { setApiFauna, addNewFauna, removeFauna } = faunaSlice.actions;
export default faunaSlice.reducer;
