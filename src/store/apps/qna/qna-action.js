import { toast } from "react-toastify";
import { UiSliceAction } from "../ui/uiSlice";
import { qnaSliceAction } from "./qna-slice";

// post question
export const questionCreateAction =
  (questionBody, token) => async (dispatch) => {
    const questionCreate = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/question`,
        // `api/v1/imagineCreate`,
        // "http://localhost:3699/api/imagines",
        {
          credentials: "include",
          method: "POST",
          mode: "cors",

          headers: {
            Authorization: token,
          },
          body: questionBody,
        }
      );

      if (!response.ok) {
        throw Error("Error occured in imagine create");
      }
    };

    try {
      dispatch(
        qnaSliceAction.loading({
          isLoading: true,
        })
      );
      await questionCreate();
      dispatch(
        qnaSliceAction.loading({
          isLoading: true,
        })
      );
      toast.success("posted successfully");
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

//   get all question
export const getAllQuestionAction = (token) => async (dispatch) => {
  const getAllQuestion = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/questions`,
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
      throw Error("Error occured in imagine create");
    }

    const data = await response.json();

    return data;
  };

  try {
    const questions = await getAllQuestion();

    dispatch(
      qnaSliceAction.getAllQuestion({
        questionLists: questions,
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

// get single question
export const getSingleQuestionAction = (id, token) => async (dispatch) => {
  const getSingleQuestion = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/questions/${id}`,
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
      throw Error("Error occured in imagine create");
    }

    const data = await response.json();

    return data;
  };

  try {
    const question = await getSingleQuestion();

    dispatch(
      qnaSliceAction.getSingleQuestionDetail({
        singlequestion: question,
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

// create answer
export const createAnswerAction =
  (answerBody, questionid, token) => async (dispatch) => {
    const createAnswer = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/questions/${questionid}/answer`,
        {
          credentials: "include",
          method: "POST",
          mode: "cors",

          headers: {
            Authorization: token,
          },
          body: answerBody,
        }
      );

      if (!response.ok) {
        return Error("Error occured in answer create");
      }

      return response;
    };

    try {
      await createAnswer();
      toast.success("Posted your answer");
    } catch (error) {
      toast.error(error);
    }
  };

// get all answer
export const getAnswersAction = (questionid, token) => async (dispatch) => {
  const getAnswers = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/questions/${questionid}/answers`,
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
      return Error("Error occured in fetch answers");
    }

    const data = await response.json();
    return data;
  };

  try {
    const answerList = await getAnswers();
    dispatch(
      qnaSliceAction.getAllAnswer({
        answerList: answerList,
      })
    );
  } catch (error) {
    toast.error(error);
  }
};

// get all requested question
export const getReqQuestionAction = (token) => async (dispatch) => {
  const getReqQuestion = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/privatequestionreqs`,
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
      return Error("Error occured in fetch answers");
    }

    const data = await response.json();
    return data;
  };

  try {
    const requestedQuestions = await getReqQuestion();
    dispatch(
      qnaSliceAction.getAllRequestedQuestions({
        requestedQuestions: requestedQuestions,
      })
    );
  } catch (error) {
    toast.error(error);
  }
};

// create private question
export const createPrivateQuestionAction =
  (quetionbody, token) => async (dispatch) => {
    const createPrivateQuestion = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/privatequestion`,
        {
          credentials: "include",
          method: "POST",
          mode: "cors",

          headers: {
            Authorization: token,
          },
          body: quetionbody,
        }
      );

      if (!response.ok) {
        return Error("Error occured in private question create");
      }

      return response;
    };

    try {
      await createPrivateQuestion();
      toast.success("post success");
    } catch (error) {
      toast.error(error);
    }
  };
