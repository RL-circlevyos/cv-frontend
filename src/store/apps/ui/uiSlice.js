import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
  name: "ui",
  initialState: {
    errorMessage: null,
    isLoading: false,
  },
  reducers: {
    ErrorMessage(state, action) {
      state.errorMessage = action.payload.errorMessage;
    },
    clearError(state, action) {
      state.errorMessage = null;
    },
    loading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const UiSliceAction = UiSlice.actions;
export const UiSliceReducer = UiSlice.reducer;
