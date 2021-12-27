import { createSlice } from "@reduxjs/toolkit";

const initialCreateImagineState = {
  generalImagines: [],
  singleImagine: {},
};

const imagineSlice = createSlice({
  name: "createImagine",
  initialState: initialCreateImagineState,
  reducers: {
    createPosts: (state, action) => {
      state.posts = action.payload.posts;
      console.log(state.posts, "post of imagine");
    },
    getImagine(state, action) {
      state.generalImagines = action.payload.generalImagines;
    },
    getSingleImagine(state, action) {
      state.singleImagine = action.payload.singleImagine;
    },
  },
});

export const imagineSliceReducer = imagineSlice.reducer;
export const imagineSliceAction = imagineSlice.actions;
