import { createSlice } from "@reduxjs/toolkit";

const initialCreateImagineState = {
  generalImagines: [],
  singleImagine: {},
  comments: [],
  isinitiate: false,
  appreciate: [],
  appriciateList: [],
  skipCount: 0,
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
    getAppreciates(state, action) {
      state.appreciate = action.payload.appreciate;
      console.log(state.appreciate, "imagineSlice action");
    },
    getAppreciateList(state, action) {
      state.appriciateList = action.payload.appriciateList;
    },
    skipCountNext(state, action) {
      state.skipCount = state.skipCount + 1;
      console.log(state.skipCount, "skip next");
    },
    skipCountPrev(state, action) {
      state.skipCount = state.skipCount - 1;
    },
  },
});

export const imagineSliceReducer = imagineSlice.reducer;
export const imagineSliceAction = imagineSlice.actions;
