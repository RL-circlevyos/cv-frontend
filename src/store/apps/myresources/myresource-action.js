import { UiSliceAction } from "../ui/uiSlice";
import { myResourceAction } from "./myresource-slice";

// create notes
export const createNoteAction = (token, noteData) => async (dispatch) => {
  const createNote = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/material`,
      {
        credentials: "include",
        method: "POST",
        mode: "cors",

        headers: {
          Authorization: token,
        },
        body: noteData,
      }
    );

    if (!response.ok) {
      throw Error("Error occured in note fetch");
    }

    return await response.json();
  };

  try {
    await createNote();
  } catch (error) {
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: error.message,
      })
    );
  }
};

// create mock paper
export const createMockPaperAction =
  (token, mockpaperData) => async (dispatch) => {
    const createMockPaper = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/mockpaper`,
        {
          credentials: "include",
          method: "POST",
          mode: "cors",

          headers: {
            Authorization: token,
          },
          body: mockpaperData,
        }
      );

      if (!response.ok) {
        throw Error("Error occured in mock paper fetch");
      }

      return await response.json();
    };

    try {
      await createMockPaper();
    } catch (error) {
      dispatch(
        UiSliceAction.ErrorMessage({
          errorMessage: error.message,
        })
      );
    }
  };

// get all notes
export const getAllNotesAction = (token) => async (dispatch) => {
  const getAllNotes = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/materials`,
      {
        credentials: "include",
        method: "GET",
        mode: "cors",

        headers: {
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in notes fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    const notes = await getAllNotes();

    dispatch(
      myResourceAction.getAllMaterials({
        allMaterials: notes,
      })
    );
  } catch (error) {
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: error.message,
      })
    );
  }
};

// get single note
export const getSingleNoteAction = (token, id) => async (dispatch) => {
  const getSingleNote = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/materials/${id}`,
      {
        credentials: "include",
        method: "GET",
        mode: "cors",

        headers: {
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in single mock paper fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    const singleMaterial = await getSingleNote();

    dispatch(
      myResourceAction.getSingleMaterial({
        singleMaterial,
      })
    );
  } catch (error) {
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: error.message,
      })
    );
  }
};

// get all mock papers
export const getAllMockPaperAction = (token) => async (dispatch) => {
  const getAllMockPaper = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/mockpapers`,
      {
        credentials: "include",
        method: "GET",
        mode: "cors",

        headers: {
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in notes fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    const mockPapers = await getAllMockPaper();

    dispatch(
      myResourceAction.getAllMockPapers({
        allMockPapers: mockPapers,
      })
    );
  } catch (error) {
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: error.message,
      })
    );
  }
};

// get single mock paper
export const getSingleMockPaperAction = (token, id) => async (dispatch) => {
  const getSingleMockPaper = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/mockpapers/${id}`,
      {
        credentials: "include",
        method: "GET",
        mode: "cors",

        headers: {
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in single mock paper fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    const singleMockPaper = await getSingleMockPaper();

    dispatch(
      myResourceAction.getSingleMockpaper({
        singleMockPaper,
      })
    );
  } catch (error) {
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: error.message,
      })
    );
  }
};

//   get all question
export const getAllCourseAction = (token) => async (dispatch) => {
  const getAllCourse = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/courses`,
      {
        credentials: "include",
        method: "GET",
        mode: "cors",

        headers: {
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in course fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    const courses = await getAllCourse();

    dispatch(
      myResourceAction.getAllCourses({
        allCourses: courses,
      })
    );
  } catch (error) {
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: error.message,
      })
    );
  }
};

//   get all Exams
export const getAllExamsAction = (token) => async (dispatch) => {
  const getAllExam = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/exams`,
      {
        credentials: "include",
        method: "GET",
        mode: "cors",

        headers: {
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in exam fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    const exams = await getAllExam();

    dispatch(
      myResourceAction.getAllExams({
        allExams: exams,
      })
    );
  } catch (error) {
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: error.message,
      })
    );
  }
};
