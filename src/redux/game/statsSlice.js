import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completedLevels: {
    Savannah: {
      lesson1: false,
      lesson2: false,
      lesson3: false,
      lesson4: false,
      count: 0, 
    },
    Moorland: {
      lesson1: false,
      lesson2: false,
      lesson3: false,
      lesson4: false,
      count: 0,
    },
    TropicalForest: {
      lesson1: false,
      lesson2: false,
      lesson3: false,
      lesson4: false,
      count: 0,
    },
    Seagrass: {
      lesson1: false,
      lesson2: false,
      lesson3: false,
      lesson4: false,
      count: 0,
    },
    PelagicEcosystem: {
      lesson1: false,
      lesson2: false,
      lesson3: false,
      lesson4: false,
      count: 0,
    },
    Mangroves: {
      lesson1: false,
      lesson2: false,
      lesson3: false,
      lesson4: false,
      count: 0,
    },
    Reef: {
      lesson1: false,
      lesson2: false,
      lesson3: false,
      lesson4: false,
      count: 0,
    },
  },
};

const statsSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    completeLesson: (state, action) => {
      const { bioma, lesson } = action.payload;

      const biomaProgress = state.completedLevels[bioma];

      if (biomaProgress && !biomaProgress[lesson]) {
        biomaProgress[lesson] = true;
        biomaProgress.count += 1;
      }
    },
  },
});

export const { completeLesson } = statsSlice.actions;
export default statsSlice.reducer;
