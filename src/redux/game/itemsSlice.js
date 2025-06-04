import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [], 
    score: 0,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.score = 0;
    },
    collectItem: (state, action) => {
      const { x, y } = action.payload;
      state.items = state.items.filter(item => item.x !== x || item.y !== y);
      state.score += 1;
    },
  },
});

export const { setItems, collectItem } = itemsSlice.actions;
export default itemsSlice.reducer;
