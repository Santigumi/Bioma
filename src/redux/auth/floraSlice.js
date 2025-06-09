import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFlora = createAsyncThunk(
  "flora/fetchFlora",
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
