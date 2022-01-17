import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./apps/auth/auth-slice";
import { blogSliceReducer } from "./apps/blogs/blog-slice";
import { imagineSliceReducer } from "./apps/imagines/imagine-slice";
import { UiSliceReducer } from "./apps/ui/uiSlice";

const store = configureStore({
  reducer: {
    imagine: imagineSliceReducer,
    auth: authReducer,
    blog: blogSliceReducer,
    ui: UiSliceReducer,
  },
});
export default store;
