import { useSelector } from "react-redux";
import { UiSliceAction } from "../ui/uiSlice";
import { blogSliceAction } from "./blog-slice";

export const blogCreateAction = (blogBody, token) => async (dispatch) => {
  // const auth = useSelector((state) => state.auth);
  const blogCreate = async () => {
    const response = await fetch(
      // `${process.env.REACT_APP_API_BASE_URL}/blogs`,
      "http://localhost:1337/api/blogs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(blogBody),
      }
    );

    console.log(response.json());

    if (!response.ok) {
      throw Error("Error occured in question create");
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

// export const singlequestionFetchAction = (qnaid) => async (dispatch) => {
//   const singlequestionFetch = async () => {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_BASE_URL}/qna/${qnaid}`,
//       {
//         credentials: "include",
//         method: "GET",
//         headers:{
//           "Content-Type":"application/json"
//         },
//         mode: "cors",
//       }
//     );

//     if (!response.ok) {
//       throw Error("Error occured in class create");
//     }

//     const data = await response.json();
//     return data;
//   };

//   try {
//     const question = await singlequestionFetch();
//     console.log(question);
//     dispatch(
//       discussionSliceAction.getQuestion({
//         question,
//       })
//     );
//   } catch (err) {
//     console.log(err);
//   }
//   };

//   export const answerCreateAction =
//   (qnaid, answerBody) => async (dispatch) => {

//     const answerCreate = async () => {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE_URL}/qna/${qnaid}/answers`,
//         {
//           credentials: "include",
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           mode: "cors",
//           body: JSON.stringify(answerBody),
//         }
//       );

//       console.log(response.json());

//       if (!response.ok) {
//         throw Error("Error occured in question create");
//       }
//     };

//     try {
//       await answerCreate();
//      dispatch(discussionSliceAction.createAnswer())
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   export const answerApproveAction =
//   (qnaid, ansId) => async (dispatch) => {

//     const answerApprove = async () => {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE_URL}/qna/${qnaid}/answers/${ansId}/select`,
//         {
//           credentials: "include",
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           mode: "cors",

//         }
//       );

//       console.log(response.json());

//       if (!response.ok) {
//         throw Error("Error occured in question create");
//       }
//     };

//     try {
//       await answerApprove();

//     } catch (err) {
//       console.log(err);
//     }
//   };
