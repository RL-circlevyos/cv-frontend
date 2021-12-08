import { createSlice } from "@reduxjs/toolkit";

const initialCreateImagineState = {
  posts: [],
};

const createImagineSlice = createSlice({
  name: "createImagine",
  initialState: initialCreateImagineState,
  reducers: {
    createPosts: (state, action) => {
      state.posts = action.payload.posts;
      console.log(state.posts, "post of imagine");
    },
  },
});

export const createImagineSliceReducer = createImagineSlice.reducer;
export const createImagineSliceAction = createImagineSlice.actions;
