import { createSlice } from "@reduxjs/toolkit";

const initialBlogState = {
  blogPosts: [],
  comments: [],
  blogPostItem: {},
  newBlogTitle: "",
  newBlogItem: {},
  newBlogContent: undefined,
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
    getComments(state, action) {
      state.comments = action.payload.comments;
    },
    getBlogItem(state, action) {
      state.blogPostItem = action.payload.blogPostItem;
    },
    getComment(state, action) {
      state.comments = action.payload.comments;
      state.isCommentInitiate = false;
    },
    createBlog(state, action) {
      console.log("calling");
      state.newBlogTitle = action.payload.newBlogTitle;
      state.newBlogContent = action.payload.newBlogContent;
      console.log(state.newBlogContent, "new blog content");
      state.isBlogInitiate = true;
    },
    newBlogContent(state, action) {
      state.newBlogItem = action.payload.newBlogItem;
      console.log(state.newBlogItem);
    },
    createComment(state, action) {
      state.isCommentInitiate = true;
    },
  },
});

export const blogSliceReducer = blogSlice.reducer;
export const blogSliceAction = blogSlice.actions;
