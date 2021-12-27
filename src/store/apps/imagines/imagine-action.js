import { UiSliceAction } from "../ui/uiSlice";
import { imagineSliceAction } from "./imagine-slice";

// post imagine
export const generalImagineCreateAction =
  (GeneralImagineBody) => async (dispatch) => {
    // const auth = useSelector((state) => state.auth);
    console.log(GeneralImagineBody);
    const GeneralImagineCreate = async () => {
      const response = await fetch(
        // `${process.env.REACT_APP_API_BASE_URL}/blogs`,
        "http://localhost:3699/api/imagines",
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
        throw Error("Error occured in imagine create");
      }
    };

    try {
      dispatch(
        UiSliceAction.loading({
          isLoading: true,
        })
      );
      await GeneralImagineCreate();
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
export const generalImagineFetchAction = () => async (dispatch) => {
  console.log("calling");

  const generalImagineFetch = async () => {
    const response = await fetch(
      // `${process.env.REACT_APP_API_BASE_URL}/blogposts`,
      "http://localhost:3699/api/imagines",
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
    const gImagines = await generalImagineFetch();
    console.log(gImagines);

    dispatch(
      imagineSliceAction.getImagine({
        generalImagines: gImagines,
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
    console.log("calling");

    const generalImagineSingleFetch = async () => {
      const response = await fetch(
        // `${process.env.REACT_APP_API_BASE_URL}/blogposts`,
        `http://localhost:3699/api/imagines/${imagineId}`,
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
      const gImagine = await generalImagineSingleFetch();
      console.log(gImagine);

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
