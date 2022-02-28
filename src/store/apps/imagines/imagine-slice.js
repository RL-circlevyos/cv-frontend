import { createSlice } from "@reduxjs/toolkit";

const initialCreateImagineState = {
  generalImagines: [],
  singleImagine: {},
  comments: [],
  isinitiate: false,
  isUploading: false,
  appreciateIds: [],
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
    clearSingleImagine(state, action) {
      state.singleImagine = {};
    },
    getComments(state, action) {
      state.comments = action.payload.comments;
    },
    getAppreciateIds(state, action) {
      state.appreciateIds = action.payload.appreciateIds;
    },
    getAppreciateList(state, action) {
      state.appriciateList = action.payload.appriciateList;
    },
    skipCountNext(state, action) {
      state.skipCount = state.skipCount + 1;
    },
    skipCountPrev(state, action) {
      state.skipCount = state.skipCount - 1;
    },
    uploading(state, action) {
      state.isUploading = action.payload.isUploading;
    },
  },
});

export const imagineSliceReducer = imagineSlice.reducer;
export const imagineSliceAction = imagineSlice.actions;
