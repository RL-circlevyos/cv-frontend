import { UiSliceAction } from "../ui/uiSlice";
import { imagineSliceAction } from "./imagine-slice";
import { toast } from "react-toastify";

// post imagine
export const generalImagineCreateAction =
  (GeneralImagineBody) => async (dispatch) => {
    console.log(GeneralImagineBody);
    const GeneralImagineCreate = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/imagineCreate`,
        // "http://localhost:3699/api/imagines",
        {
          credentials: "include",
          method: "POST",
          mode: "cors",
          // headers: {
          //   "Content-Type": "form-data",
          // },
          body: GeneralImagineBody,
        }
      );

      console.log(response.json());

      if (!response.ok) {
        toast.error("something went wrong");

        throw Error("Error occured in imagine create");
      }

      toast.success("posted successfully");
    };

    try {
      // dispatch(
      //   UiSliceAction.loading({
      //     isLoading: true,
      //   })
      // );
      await GeneralImagineCreate();
      dispatch(
        imagineSliceAction.createPost({
          isinitiate: true,
        })
      );
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

// get all imagine
export const generalImagineFetchAction = (skipCount) => async (dispatch) => {
  const generalImagineFetch = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/imagines?skipCount=${skipCount}`,
      // "http://localhost:3699/api/imagines",
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
      toast.error("something went wrong");
      throw Error("Error occured in class create");
    }

    const data = await response.json();
    console.log(data, "imagines");
    return data;
  };

  try {
    // dispatch(
    //   UiSliceAction.loading({
    //     isLoading: true,
    //   })
    // );

    const gImagines = await generalImagineFetch();
    console.log(gImagines.imaginesArray);

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
  } finally {
    dispatch(
      UiSliceAction.loading({
        isLoading: false,
      })
    );
  }
};

// get imagine
export const generalImagineSingleFetchAction =
  (imagineId) => async (dispatch) => {
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
          },
        }
      );

      if (!response.ok) {
        toast.error("something went wrong");

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

// delete imagine
// get imagine
export const deleteImagineAction = (imagineId) => async (dispatch) => {
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
        },
      }
    );

    if (!response.ok) {
      toast.error("something went wrong");
      throw Error("Error occured in class create");
    }
    toast.info("deleted successfully");
    const data = await response.json();
    return data;
  };

  try {
    const gImagineDelete = await deleteImagine();
    dispatch(
      imagineSliceAction.inititateProcess({
        isinitiate: true,
      })
    );
    console.log(gImagineDelete);
  } catch (err) {
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
  (GeneralImagineBody, imagineId) => async (dispatch) => {
    console.log(GeneralImagineBody);
    const GeneralImagineUpdate = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/imagines/${imagineId}`,
        // "http://localhost:3699/api/imagines",
        {
          credentials: "include",
          method: "PATCH",
          mode: "cors",
          // headers: {
          //   "Content-Type": "form-data",
          // },
          body: GeneralImagineBody,
        }
      );

      console.log(response.json());

      if (!response.ok) {
        toast.error("something went wrong");

        throw Error("Error occured in imagine create");
      }

      toast.success("updated successfully");
    };

    try {
      dispatch(
        UiSliceAction.loading({
          isLoading: true,
        })
      );
      await GeneralImagineUpdate();
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

// post comment
export const commentCreateAction =
  (commentBody, imagineId) => async (dispatch) => {
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
          },
          body: JSON.stringify(commentBody),
        }
      );

      console.log(response.json());

      if (!response.ok) {
        toast.error("something went wrong");

        throw Error("Error occured in imagine create");
      }

      toast.info("comment posted");
    };

    try {
      // dispatch(
      //   UiSliceAction.loading({
      //     isLoading: true,
      //   })
      // );
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

// get comments
export const commentFetchAction = (imagineId) => async (dispatch) => {
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
        },
      }
    );

    if (!response.ok) {
      toast.error("something went wrong");
      throw Error("Error occured in comment create");
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

// appriciate
export const appriciateAction = (imagineId) => async (dispatch) => {
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
        },
      }
    );

    if (!response.ok) {
      toast.error("something went wrong");
      throw Error("Error occured in imagine appriciate");
    }

    const data = await response.json();
    console.log(data, "appriciate");
    return data;
  };

  try {
    const aprct = await appriciate();
    dispatch(
      imagineSliceAction.getAppreciates({
        appriciate: aprct,
      })
    );
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
export const appriciateListAction = (imagineId) => {
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

// save
export const saveImagineAction = (imagineId) => async (dispatch) => {
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
        },
      }
    );

    if (!response.ok) {
      toast.error("something went wrong");
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
