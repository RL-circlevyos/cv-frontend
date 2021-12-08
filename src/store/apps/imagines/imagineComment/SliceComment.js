import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    sendMessageIsOpen: false,
  },

  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const {
  selectComment,
  openSendMessage,
  closeSendMessage,
} = commentSlice.actions;

export const selectOpenComment = (state) => state.comment.selectedComment;
export const selectSendMessageIsOpen = (state) =>
  state.comment.sendMessageIsOpen;

export default commentSlice.reducer;
