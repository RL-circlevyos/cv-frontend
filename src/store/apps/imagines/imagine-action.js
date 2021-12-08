import { createImagineSliceAction } from "./imagine-slice";

export const createImagineAction = (newPost) => async (dispatch) => {
  try {
    dispatch(
      createImagineSliceAction.createPosts({
        posts: newPost,
      })
    );
  } catch (error) {
    console.log(error.message);
  }
};
