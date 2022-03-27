import { toast } from "react-toastify";
import { jobSliceAction } from "./job-slice";

export const jobCreateAction = (jobPostBody, token) => async (dispatch) => {
  const jobCreate = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/job`, {
      credentials: "include",
      method: "POST",
      mode: "cors",

      headers: {
        Authorization: token,
      },
      body: jobPostBody,
    });

    if (!response.ok) {
      return Error("Error occured in job create");
    }

    return response;
  };

  try {
    await jobCreate();
    toast.success("job created");
  } catch (error) {
    toast.error(error);
  }
};

// get all jobs
//   get all question
export const getAllJobAction = (token) => async (dispatch) => {
  const getAllJobs = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/jobs`, {
      credentials: "include",
      method: "GET",
      mode: "cors",

      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw Error("Error occured in imagine create");
    }

    const data = await response.json();

    return data;
  };

  try {
    const jobs = await getAllJobs();

    dispatch(
      jobSliceAction.getAllJobs({
        allJobs: jobs,
      })
    );
  } catch (error) {}
};
