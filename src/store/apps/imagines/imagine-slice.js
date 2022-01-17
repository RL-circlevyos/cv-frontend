import { createSlice } from "@reduxjs/toolkit";

const initialCreateImagineState = {
  generalImagines: [],
  singleImagine: {},
  comments: [],
  isinitiate: false,
};

const imagineSlice = createSlice({
  name: "createImagine",
  initialState: initialCreateImagineState,
  reducers: {
    inititateProcess(state, action) {
      state.isinitiate = action.payload.isinitiate;
    },
    createPost: (state, action) => {
      state.isinitiate = action.payload.isinitiate;
    },
    getImagine(state, action) {
      state.generalImagines = action.payload.generalImagines;
      state.isinitiate = false;
    },
    getSingleImagine(state, action) {
      state.singleImagine = action.payload.singleImagine;
    },
    getComments(state, action) {
      state.comments = action.payload.comments;
    },
  },
});

export const imagineSliceReducer = imagineSlice.reducer;
export const imagineSliceAction = imagineSlice.actions;
