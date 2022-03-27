import { createSlice } from "@reduxjs/toolkit";

const initialQnaState = {
  questionLists: [],
  singlequestion: {},
  answerList: [],
  requestedQuestions: [],
  isLoading: false,
};

const qnaSlice = createSlice({
  name: "qna",
  initialState: initialQnaState,
  reducers: {
    loading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
    getAllQuestion(state, action) {
      state.questionLists = action.payload.questionLists;
    },
    getSingleQuestionDetail(state, action) {
      state.singlequestion = action.payload.singlequestion;
    },
    getAllAnswer(state, action) {
      state.answerList = action.payload.answerList;
    },
    getAllRequestedQuestions(state, action) {
      state.requestedQuestions = action.payload.requestedQuestions;
    },
  },
});

export const qnaSliceReducer = qnaSlice.reducer;
export const qnaSliceAction = qnaSlice.actions;
