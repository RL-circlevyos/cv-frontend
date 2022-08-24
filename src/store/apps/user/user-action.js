import { toast } from "react-toastify";
import { userSliceAction } from "./user-slice";

export const getAllMentorAction = (token) => async (dispatch) => {
  const getAllMentor = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/allmentors`,
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
      return Error("error occured in mentors fetch");
    }

    const data = await response.json();
    return data;
  };

  try {
    const allMentors = await getAllMentor();
    dispatch(userSliceAction.getAllMentors({ allMentors: allMentors }));
  } catch (error) {
    toast.error(error);
  }
};
