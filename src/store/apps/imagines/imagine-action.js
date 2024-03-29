import { UiSliceAction } from "../ui/uiSlice";
import { imagineSliceAction } from "./imagine-slice";
import { toast } from "react-toastify";
import axios from "axios";

// post imagine
export const generalImagineCreateAction =
  (GeneralImagineBody, token) => async (dispatch) => {
    const GeneralImagineCreate = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/imagineCreate`,
        // `api/v1/imagineCreate`,
        // "http://localhost:3699/api/imagines",
        {
          credentials: "include",
          method: "POST",
          mode: "cors",

          headers: {
            Authorization: token,
          },
          body: GeneralImagineBody,
        }
      );

      console.log(response.json());

      if (!response.ok) {
        throw Error("Error occured in imagine create");
      }
    };

    try {
      dispatch(
        imagineSliceAction.uploading({
          isUploading: true,
        })
      );
      await GeneralImagineCreate();
      dispatch(
        imagineSliceAction.uploading({
          isUploading: false,
        })
      );
      toast.success("posted successfully");
      dispatch(
        imagineSliceAction.createPost({
          isinitiate: true,
        })
      );
    } catch (e) {
      toast.error(e.message);
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

// get all imagine
export const generalImagineFetchAction =
  (skipCount, token) => async (dispatch) => {
    const generalImagineFetch = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/imagines?skipCount=${skipCount}`,
        // "http://localhost:3699/api/imagines",
        {
          // credentials: "include",
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
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
      // dispatch(
      //   UiSliceAction.loading({
      //     isLoading: true,
      //   })
      // );

      const gImagines = await generalImagineFetch();

      dispatch(
        imagineSliceAction.getImagine({
          generalImagines: gImagines.imaginesArray,
        })
      );
    } catch (err) {
      console.log(err);

      dispatch(
        UiSliceAction.ErrorMessage({
          errorMessage: err.message,
        })
      );
      dispatch(
        UiSliceAction.loading({
          isLoading: false,
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

// ************************** TODO: ADD token
// get imagine
export const generalImagineSingleFetchAction =
  (imagineId, token) => async (dispatch) => {
    console.log("calling single imagine id", imagineId);

    const generalImagineSingleFetch = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}`,
        // `http://localhost:3699/api/imagines/${imagineId}`,
        {
          credentials: "include",
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
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
      const gImagine = await generalImagineSingleFetch();
      //console.log(gImagine);

      dispatch(
        imagineSliceAction.getSingleImagine({
          singleImagine: gImagine,
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

// get alternate imagine
// export const generalImagineAlternateSingleFetchAction =
//   (imagineId) => async (dispatch) => {
//     console.log("calling single imagine id", imagineId);

/**     const generalImagineAlternateSingleFetch = async () => {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}`,
//         // `http://localhost:3699/api/imagines/${imagineId}`,
//         {
//           credentials: "include",
//           method: "GET",
//           mode: "cors",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw Error("Error occured in class create");
//       }

//       const data = await response.json();
//       return data;
//     };

//     try {
//       const gImagine = await generalImagineAlternateSingleFetch();
//       //console.log(gImagine);

//       dispatch(
//         imagineSliceAction.getSingleImagine({
//           singleImagine: gImagine,
//         })
//       );
//     } catch (err) {
//       toast.error(err.message);
//       console.log(err);
//       dispatch(
//         UiSliceAction.ErrorMessage({
//           errorMessage: err.message,
//         })
//       );
//     } finally {
//       dispatch(
//         UiSliceAction.loading({
//           isLoading: false,
//         })
//       );
//     }
//   };*/

// delete imagine

export const deleteImagineAction = (imagineId, token) => async (dispatch) => {
  const deleteImagine = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}`,
      // `http://localhost:3699/api/imagines/${imagineId}`,
      {
        credentials: "include",
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
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
    const gImagineDelete = await deleteImagine();
    toast.info("deleted successfully");
    dispatch(
      imagineSliceAction.inititateProcess({
        isinitiate: true,
      })
    );
    console.log(gImagineDelete);
  } catch (err) {
    toast.error(err.message);
    console.log(err);
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: err.message,
      })
    );
  }
};

// update imagine
export const generalImagineUpdateAction =
  (GeneralImagineBody, imagineId, token) => async (dispatch) => {
    console.log(GeneralImagineBody);
    const GeneralImagineUpdate = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}`,
        // "http://localhost:3699/api/imagines",
        {
          credentials: "include",
          method: "PATCH",
          mode: "cors",
          headers: {
            // "Content-Type": "form-data",
            Authorization: token,
          },
          body: GeneralImagineBody,
        }
      );

      console.log(response.json());

      if (!response.ok) {
        throw Error("Error occured in imagine create");
      }
    };

    try {
      dispatch(
        UiSliceAction.loading({
          isLoading: true,
        })
      );
      dispatch(
        imagineSliceAction.uploading({
          isUploading: true,
        })
      );
      await GeneralImagineUpdate();
      dispatch(
        imagineSliceAction.uploading({
          isUploading: false,
        })
      );
      toast.success("updated successfully");
    } catch (e) {
      toast.error(e.message);
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

// post comment
export const commentCreateAction =
  (commentBody, imagineId, token) => async (dispatch) => {
    console.log(imagineId);
    // const auth = useSelector((state) => state.auth);
    console.log(commentBody);
    const commentCreate = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}/comment`,
        // `http://localhost:3699/api/imagines/${imagineId}/comments`,
        {
          credentials: "include",
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(commentBody),
        }
      );

      console.log(response.json());

      if (!response.ok) {
        throw Error("Error occured in imagine create");
      }
    };

    try {
      // dispatch(
      //   UiSliceAction.loading({
      //     isLoading: true,
      //   })
      // );
      await commentCreate();
      toast.info("comment posted");
    } catch (e) {
      toast.error(e.message);
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

// get comments
export const commentFetchAction = (imagineId, token) => async (dispatch) => {
  console.log(imagineId, "comment fetch");
  const commentFetch = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}/comments`,
      // `http://localhost:3699/api/v1/imagines/${imagineId}/comments`,
      {
        credentials: "include",
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in comment ");
    }

    const data = await response.json();
    console.log(data, "comment");
    return data;
  };

  try {
    // dispatch(
    //   UiSliceAction.loading({
    //     isLoading: true,
    //   })
    // );
    const comments = await commentFetch();

    dispatch(
      imagineSliceAction.getComments({
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

// delete comment
export const commentDeleteAction =
  (imagineId, commentId, token) => async (dispatch) => {
    console.log(imagineId);

    const commentDelete = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}/comment/${commentId}`,
        // `http://localhost:3699/api/imagines/${imagineId}/comments`,
        {
          credentials: "include",
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      console.log(response.json());

      if (!response.ok) {
        throw Error("Error occured in imagine create");
      }
    };

    try {
      await commentDelete();
      toast.info("comment deleted");
    } catch (e) {
      toast.error(e.message);
      dispatch(
        UiSliceAction.ErrorMessage({
          errorMessage: e.message,
        })
      );

      throw e;
    }
  };

// appriciate
export const appriciateAction = (imagineId, token) => async (dispatch) => {
  console.log(imagineId);
  // const auth = useSelector((state) => state.auth);

  const appriciate = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}/appriciate`,
      // `http://localhost:3699/api/imagines/${imagineId}/comments`,
      {
        credentials: "include",
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in imagine appriciate");
    }

    const data = await response.json();
    console.log(data, "appriciate");
    return data;
  };

  try {
    await appriciate();
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

// appriciate List
export const appriciateListAction = (imagineId, token) => {
  return async (dispatch) => {
    // 📈 send data to database
    const appriciateList = async () => {
      console.log("followings list");
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}/appriciateList`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      // checking response status
      if (!response.ok) {
        /**toast.error("something went wrong");*/
        throw Error("authentication failed");
      }

      const responseData = await response.json();
      console.log(responseData);
      return responseData.appriciates;
    };

    try {
      const response = await appriciateList();
      console.log(response);
      dispatch(
        imagineSliceAction.getAppreciateList({
          appriciateList: response,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

// appriciate id List
export const appriciateIdListAction = (imagineId, token) => {
  return async (dispatch) => {
    // 📈 send data to database
    const appriciateIdList = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}/appriciateIdList`,
        // "http://localhost:3699/api/v1/authstate",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      // checking response status
      if (!response.ok) {
        /**toast.error("something went wrong");*/
        throw Error("appreciate failed");
      }

      const responseData = await response.json();
      console.log(responseData);
      return responseData;
    };

    try {
      const response = await appriciateIdList();
      console.log(response);
      dispatch(
        imagineSliceAction.getAppreciateIds({
          appreciateIds: response,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

// save
export const saveImagineAction = (imagineId, token) => async (dispatch) => {
  console.log(imagineId);
  // const auth = useSelector((state) => state.auth);

  const save = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}/save`,
      // `http://localhost:3699/api/imagines/${imagineId}/comments`,
      {
        credentials: "include",
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in imagine appriciate");
    }
  };

  try {
    dispatch(
      UiSliceAction.loading({
        isLoading: true,
      })
    );
    await save();
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
