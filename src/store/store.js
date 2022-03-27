import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./apps/auth/auth-slice";
import { blogSliceReducer } from "./apps/blogs/blog-slice";
import { imagineSliceReducer } from "./apps/imagines/imagine-slice";
import { jobSliceReducer } from "./apps/job/job-slice";
import { qnaSliceReducer } from "./apps/qna/qna-slice";
import { UiSliceReducer } from "./apps/ui/uiSlice";
import { userSliceReducer } from "./apps/user/user-slice";

const store = configureStore({
  reducer: {
    imagine: imagineSliceReducer,
    auth: authReducer,
    blog: blogSliceReducer,
    ui: UiSliceReducer,
    qna: qnaSliceReducer,
    job: jobSliceReducer,
    user: userSliceReducer,
  },
});
export default store;
