import { useSelector } from "react-redux";
import { UiSliceAction } from "../ui/uiSlice";
import { blogSliceAction } from "./blog-slice";

export const blogCreateAction = (blogBody) => async (dispatch) => {
  // const auth = useSelector((state) => state.auth);
  console.log(blogBody);
  const blogCreate = async () => {
    const response = await fetch(
      // `${process.env.REACT_APP_API_BASE_URL}/blogs`,
      "http://localhost:3699/api/blogs",
      {
        credentials: "include",
        method: "POST",
        mode: "cors",
        // headers: {
        //   "Content-Type": "form-data",
        // },
        body: blogBody,
      }
    );

    console.log(response.json());

    if (!response.ok) {
      throw Error("Error occured in blog create");
    }
  };

  try {
    dispatch(
      UiSliceAction.loading({
        isLoading: true,
      })
    );
    await blogCreate();
  } catch (e) {
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: e.message,
      })
    );
    throw e;
  } finally {
    dispatch(
      UiSliceAction.loading({
        isLoading: false,
      })
    );
  }
};

export const blogFetchAction = () => async (dispatch) => {
  // console.log(token);
  // const auth = useSelector((state) => state.auth);
  const blogFetch = async () => {
    const response = await fetch(
      // `${process.env.REACT_APP_API_BASE_URL}/blogposts`,
      "http://localhost:3699/api/blogs",
      {
        credentials: "include",
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in class create");
    }

    const data = await response.json();
    return data;
  };

  try {
    dispatch(
      UiSliceAction.loading({
        isLoading: true,
      })
    );
    const blogPosts = await blogFetch();
    console.log(blogPosts);

    dispatch(
      blogSliceAction.getBlogs({
        blogPosts,
      })
    );
  } catch (err) {
    console.log(err);
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: err.message,
      })
    );
  } finally {
    dispatch(
      UiSliceAction.loading({
        isLoading: false,
      })
    );
  }
};

export const blogSingleFetchAction = (blogid) => async (dispatch) => {
  console.log(blogid);
  // const auth = useSelector((state) => state.auth);
  const blogSingleFetch = async () => {
    const response = await fetch(
      // `${process.env.REACT_APP_API_BASE_URL}/blogposts`,
      `http://localhost:3699/api/blogs/${blogid}`,
      {
        credentials: "include",
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in class create");
    }

    const data = await response.json();
    return data;
  };

  try {
    dispatch(
      UiSliceAction.loading({
        isLoading: true,
      })
    );
    const blogPostItem = await blogSingleFetch();
    console.log(blogPostItem);
    dispatch(
      blogSliceAction.getBlogItem({
        blogPostItem,
      })
    );
  } catch (err) {
    console.log(err);
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: err.message,
      })
    );
  } finally {
    dispatch(
      UiSliceAction.loading({
        isLoading: false,
      })
    );
  }
};

// comment create
export const commentCreateAction = (blogid, comment) => async (dispatch) => {
  // const auth = useSelector((state) => state.auth);

  const commentCreate = async () => {
    const response = await fetch(
      // `${process.env.REACT_APP_API_BASE_URL}/blogs`,
      `http://localhost:3699/api/blogs/${blogid}/comments`,
      {
        credentials: "include",
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );

    console.log(response.json());

    if (!response.ok) {
      throw Error("Error occured in blog create");
    }
  };

  try {
    dispatch(
      UiSliceAction.loading({
        isLoading: true,
      })
    );
    await commentCreate();
  } catch (e) {
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: e.message,
      })
    );
    throw e;
  } finally {
    dispatch(
      UiSliceAction.loading({
        isLoading: false,
      })
    );
  }
};

export const commentFetchAction = (blogid) => async (dispatch) => {
  // console.log(token);
  // const auth = useSelector((state) => state.auth);
  const commentFetch = async () => {
    const response = await fetch(
      // `${process.env.REACT_APP_API_BASE_URL}/blogposts`,
      `http://localhost:3699/api/blogs/${blogid}/comments`,
      {
        credentials: "include",
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in class create");
    }

    const data = await response.json();
    return data;
  };

  try {
    dispatch(
      UiSliceAction.loading({
        isLoading: true,
      })
    );
    const comments = await commentFetch();

    dispatch(
      blogSliceAction.getComments({
        comments,
      })
    );
  } catch (err) {
    console.log(err);
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: err.message,
      })
    );
  } finally {
    dispatch(
      UiSliceAction.loading({
        isLoading: false,
      })
    );
  }
};

// like blog
export const likePostAction = (blogid) => async (dispatch) => {
  // const auth = useSelector((state) => state.auth);

  const likePost = async () => {
    const response = await fetch(
      // `${process.env.REACT_APP_API_BASE_URL}/blogs`,
      `http://localhost:3699/api/blogs/${blogid}/likes`,
      {
        credentials: "include",
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in blog create");
    }
  };

  try {
    dispatch(
      UiSliceAction.loading({
        isLoading: true,
      })
    );
    await likePost();
  } catch (e) {
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: e.message,
      })
    );
    throw e;
  } finally {
    dispatch(
      UiSliceAction.loading({
        isLoading: false,
      })
    );
  }
};
