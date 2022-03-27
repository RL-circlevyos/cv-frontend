import { createSlice } from "@reduxjs/toolkit";

const jobInitialState = {
  allJobs: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState: jobInitialState,
  reducers: {
    getAllJobs(state, action) {
      state.allJobs = action.payload.allJobs;
    },
  },
});

export const jobSliceReducer = jobSlice.reducer;
export const jobSliceAction = jobSlice.actions;
