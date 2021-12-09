import { configureStore } from "@reduxjs/toolkit";
import { createImagineSliceReducer } from "./apps/imagines/imagine-slice";
import commentReducer from "./apps/imagines/imagineComment/SliceComment";

const store = configureStore({
  reducer: {
    createImagine: createImagineSliceReducer,
    comment: commentReducer,
  },
});
export default store;
