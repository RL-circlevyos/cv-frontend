import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./apps/auth/auth-slice";
import { blogSliceReducer } from "./apps/blogs/blog-slice";
import { createImagineSliceReducer } from "./apps/imagines/imagine-slice";
import { UiSliceReducer } from "./apps/ui/uiSlice";

const store = configureStore({
  reducer: {
    createImagine: createImagineSliceReducer,
    auth: authReducer,
    blog: blogSliceReducer,
    imagine: createImagineSliceReducer,
    ui: UiSliceReducer,
  },
});
export default store;
