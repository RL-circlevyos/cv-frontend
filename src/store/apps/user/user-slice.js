import { createSlice } from "@reduxjs/toolkit";

const userinitialState = {
  allMentors: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: userinitialState,
  reducers: {
    getAllMentors(state, action) {
      state.allMentors = action.payload.allMentors;
    },
  },
});

export const userSliceReducer = userSlice.reducer;
export const userSliceAction = userSlice.actions;
