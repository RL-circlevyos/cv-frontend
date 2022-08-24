import { createSlice } from "@reduxjs/toolkit";

const jobInitialState = {
  allJobs: [],
  allUserCreatedJobs: [],
  appliedJobSeekers: [],
  job: {},
};

const jobSlice = createSlice({
  name: "job",
  initialState: jobInitialState,
  reducers: {
    getAllJobs(state, action) {
      state.allJobs = action.payload.allJobs;
    },
    getAllUserCreatedJobs(state, action) {
      state.allUserCreatedJobs = action.payload.allUserCreatedJobs;
    },
    getAppliedJobSeekers(state, action) {
      state.appliedJobSeekers = action.payload.appliedJobSeekers;
    },

    getSingleJob(state, action) {
      state.job = action.payload.job;
    },
  },
});

export const jobSliceReducer = jobSlice.reducer;
export const jobSliceAction = jobSlice.actions;
