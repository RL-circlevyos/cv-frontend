import { createSlice } from "@reduxjs/toolkit";

const myResourceinitialState = {
  allCourses: [],
  allExams: [],
  allBooks: [],
  allMaterials: [],
  singleMaterial: {},
  allMockPapers: [],
  singleMockPaper: {},
  userMaterials: [],
  userMockPapers: [],
  userCourses: [],
  courseSections: [],
  sectionVideos: [],
  courseVideo: {},
  courseDetails: {},
  isCreating: false,
};

const myResourceSlice = createSlice({
  name: "myresource",
  initialState: myResourceinitialState,
  reducers: {
    creating(state, action) {
      state.isCreating = action.payload.isCreating;
    },
    getAllCourses(state, action) {
      state.allCourses = action.payload.allCourses;
    },
    getCourseSections(state, action) {
      state.courseSections = action.payload.courseSections;
    },
    getSectionVideos(state, action) {
      state.sectionVideos = action.payload.sectionVideos;
    },
    getCourseVideo(state, action) {
      state.courseVideo = action.payload.courseVideo;
    },
    geSingleCourseDetail(state, action) {
      state.courseDetails = action.payload.courseDetails;
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
    getUserMockPapers(state, action) {
      state.userMockPapers = action.payload.userMockPapers;
    },
    getUserCourses(state, action) {
      state.userCourses = action.payload.userCourses;
    },
    getUserMaterials(state, action) {
      state.userMaterials = action.payload.userMaterials;
    },
  },
});

export const myResourcesReducer = myResourceSlice.reducer;
export const myResourceAction = myResourceSlice.actions;
