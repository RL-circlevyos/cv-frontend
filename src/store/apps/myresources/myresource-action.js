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
    dispatch(
      myResourceAction.creating({
        isCreating: true,
      })
    );
    await createNote();
    dispatch(
      myResourceAction.creating({
        isCreating: false,
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

// get user notes

export const getUserNotesAction = (token) => async (dispatch) => {
  const getAllNotes = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/mymaterials`,
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
      myResourceAction.getUserMaterials({
        userMaterials: notes,
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

// get user mock papers
export const getUserMockPaperAction = (token) => async (dispatch) => {
  const getAllPapers = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/mymockpapers`,
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
    const papers = await getAllPapers();

    dispatch(
      myResourceAction.getUserMockPapers({
        userMockPapers: papers,
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

// course
export const createCourseAction = (token, courseData) => async (dispatch) => {
  const createCourse = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/course`,
      {
        credentials: "include",
        method: "POST",
        mode: "cors",

        headers: {
          Authorization: token,
        },
        body: courseData,
      }
    );

    if (!response.ok) {
      throw Error("Error occured in course fetch");
    }

    return await response.json();
  };

  try {
    await createCourse();
  } catch (error) {
    dispatch(
      UiSliceAction.ErrorMessage({
        errorMessage: error.message,
      })
    );
  }
};

export const getMyCourseAction = (token) => async (dispatch) => {
  const getMyCourse = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/mycourses`,
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
    const userCourses = await getMyCourse();

    dispatch(
      myResourceAction.getUserCourses({
        userCourses,
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

// create section
export const createSectionAction =
  (token, sectionData, id) => async (dispatch) => {
    const createSection = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/section/${id}`,
        {
          credentials: "include",
          method: "POST",
          mode: "cors",

          headers: {
            Authorization: token,
          },
          body: sectionData,
        }
      );

      if (!response.ok) {
        throw Error("Error occured in section fetch");
      }

      return await response.json();
    };

    try {
      await createSection();
    } catch (error) {
      dispatch(
        UiSliceAction.ErrorMessage({
          errorMessage: error.message,
        })
      );
    }
  };

// get single course details
export const getSingleCourseAction = (id) => async (dispatch) => {
  const getSingleCourse = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/courses/${id}`,
      {
        credentials: "include",
        method: "GET",
        mode: "cors",
      }
    );

    if (!response.ok) {
      throw Error("Error occured in course details fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    const courseDetails = await getSingleCourse();

    dispatch(
      myResourceAction.geSingleCourseDetail({
        courseDetails,
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

// get sections
export const getCourseSectionAction = (token, id) => async (dispatch) => {
  const getCourseSection = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/sections/${id}`,
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
      throw Error("Error occured in course section fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    const courseSections = await getCourseSection();

    dispatch(
      myResourceAction.getCourseSections({
        courseSections,
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

// get section videos
export const getSectionVideoAction = (token, id) => async (dispatch) => {
  const getSectionVideo = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/videos/${id}`,
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
      throw Error("Error occured in section videos section fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    const sectionVideos = await getSectionVideo();

    dispatch(
      myResourceAction.getSectionVideos({
        sectionVideos,
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

// create video
export const createVideoAction = (token, videoData, id) => async (dispatch) => {
  const createVideo = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/video/${id}`,
      {
        credentials: "include",
        method: "POST",
        mode: "cors",

        headers: {
          Authorization: token,
        },
        body: videoData,
      }
    );

    if (!response.ok) {
      throw Error("Error occured in video fetch");
    }

    return await response.json();
  };

  try {
    dispatch(
      myResourceAction.creating({
        isCreating: true,
      })
    );
    await createVideo();
    dispatch(
      myResourceAction.creating({
        isCreating: false,
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

// get video
export const getVideoAction = (token, id) => async (dispatch) => {
  const getVideo = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/sectionvideos/${id}`,
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
      throw Error("Error occured in course section fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    const courseVideo = await getVideo();

    dispatch(
      myResourceAction.getCourseVideo({
        courseVideo,
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
