import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  career: {},
  isUploading: false,
  subjectandsyllabus: [],
  isLoading: false,
};

const CareerSlice = createSlice({
  name: "career",
  initialState: initialState,
  reducers: {
    getCareer(state, action) {
      state.career = action.payload.career;
    },
    getSubjectsAndSyllabus(state, action) {
      state.subjectandsyllabus = action.payload.subjectandsyllabus;
    },
    uploading(state, action) {
      state.isUploading = action.payload.isUploading;
    },
    loading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const careerSliceAction = CareerSlice.actions;
export const careerSliceReducer = CareerSlice.reducer;
