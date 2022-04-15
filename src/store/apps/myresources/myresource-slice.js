import { createSlice } from "@reduxjs/toolkit";

const myResourceinitialState = {
  allCourses: [],
  allExams: [],
  allBooks: [],
  allMaterials: [],
  singleMaterial: {},
  allMockPapers: [],
  singleMockPaper: {},
};

const myResourceSlice = createSlice({
  name: "myresource",
  initialState: myResourceinitialState,
  reducers: {
    getAllCourses(state, action) {
      state.allCourses = action.payload.allCourses;
    },
    getAllExams(state, action) {
      state.allExams = action.payload.allExams;
    },
    getAllBooks(state, action) {
      state.allBooks = action.payload.allBooks;
    },
    getAllMaterials(state, action) {
      state.allMaterials = action.payload.allMaterials;
    },
    getSingleMaterial(state, action) {
      state.singleMaterial = action.payload.singleMaterial;
    },
    getAllMockPapers(state, action) {
      state.allMockPapers = action.payload.allMockPapers;
    },
    getSingleMockpaper(state, action) {
      state.singleMockPaper = action.payload.singleMockPaper;
    },
  },
});

export const myResourcesReducer = myResourceSlice.reducer;
export const myResourceAction = myResourceSlice.actions;
