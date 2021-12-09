import { configureStore } from "@reduxjs/toolkit";
import { createImagineSliceReducer } from "./apps/imagines/imagine-slice";

const store = configureStore({
  reducer: {
    createImagine: createImagineSliceReducer,
  },
});
export default store;
