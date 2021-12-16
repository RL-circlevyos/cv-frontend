import { createSlice } from "@reduxjs/toolkit";

const initialBlogState = {
  blogPosts: [],
  comments: [],
  blogPostItem: {},
  commentItem: {},
  isBlogInitiate: false,
  isCommentInitiate: false,
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState: initialBlogState,
  reducers: {
    getBlogs(state, action) {
      state.blogPosts = action.payload.blogPosts;
      state.isBlogInitiate = false;
    },
    getComment(state, action) {
      state.comments = action.payload.comments;
      state.isCommentInitiate = false;
    },
    createBlog(state, action) {
      state.isBlogInitiate = true;
    },
    createComment(state, action) {
      state.isCommentInitiate = true;
    },
  },
});

export const blogSliceReducer = blogSlice.reducer;
export const blogSliceAction = blogSlice.actions;
