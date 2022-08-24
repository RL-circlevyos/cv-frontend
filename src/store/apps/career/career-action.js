import { careerSliceAction } from "./career-slice";

export const getCareerDetailAction = (token, id) => async (dispatch) => {
  const getCareerDetail = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/career/${id}`,
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
      throw Error("Error occured in career detail fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    dispatch(
      careerSliceAction.loading({
        isLoading: true,
      })
    );
    const career = await getCareerDetail();
    dispatch(
      careerSliceAction.loading({
        isLoading: false,
      })
    );

    dispatch(
      careerSliceAction.getCareer({
        career,
      })
    );
  } catch (error) {}
};

export const getUserRequestedSubjectSyllabusAction =
  (instituteType, affiliate, department, semester) => async (dispatch) => {
    const getCareerDetail = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/userrequestedSubjectsyllabus?instituteType=${instituteType}&affiliate=${affiliate}&department=${department}&semester=${semester}`,
        {
          credentials: "include",
          method: "GET",
          mode: "cors",
        }
      );

      if (!response.ok) {
        throw Error("Error occured in career detail fetch");
      }

      const data = await response.json();

      return data;
    };

    try {
      const subjectandsyllabus = await getCareerDetail();

      dispatch(
        careerSliceAction.getSubjectsAndSyllabus({
          subjectandsyllabus,
        })
      );
    } catch (error) {}
  };

export const createCareerDetailAction =
  (token, careerBody) => async (dispatch) => {
    const createCareerDetail = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/create-career`,
        {
          credentials: "include",
          method: "POST",
          mode: "cors",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(careerBody),
        }
      );

      if (!response.ok) {
        throw Error("Error occured in career detail fetch");
      }

      const data = await response.json();

      return data;
    };

    try {
      await createCareerDetail();
    } catch (error) {}
  };

export const updateCareerDetailAction =
  (token, careerBody, id) => async (dispatch) => {
    const updateCareerDetail = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/career/${id}`,
        {
          credentials: "include",
          method: "PATCH",
          mode: "cors",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(careerBody),
        }
      );

      if (!response.ok) {
        throw Error("Error occured in career detail fetch");
      }

      const data = await response.json();

      return data;
    };

    try {
      await updateCareerDetail();
    } catch (error) {}
  };

export const uploadResumeAction = (token, resumebody) => async (dispatch) => {
  const uploadResume = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/resume-upload`,
      {
        credentials: "include",
        method: "PATCH",
        mode: "cors",
        headers: {
          Authorization: token,
        },
        body: resumebody,
      }
    );

    if (!response.ok) {
      throw Error("Error occured in career detail fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    dispatch(careerSliceAction.uploading({ isUploading: true }));
    await uploadResume();
    dispatch(careerSliceAction.uploading({ isUploading: false }));
    window.location.reload();
  } catch (error) {}
};

export const addSkillAction = (token, skill) => async (dispatch) => {
  const addSkill = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/addskill`,
      {
        credentials: "include",
        method: "PUT",
        mode: "cors",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(skill),
      }
    );

    if (!response.ok) {
      throw Error("Error occured in career detail fetch");
    }

    const data = await response.json();

    return data;
  };

  try {
    await addSkill();
  } catch (error) {}
};
