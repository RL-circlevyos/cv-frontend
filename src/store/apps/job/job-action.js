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

// get all user created jobs
export const getAllUserCreatedJobAction = (token) => async (dispatch) => {
  const getAllUserCreatedJobs = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/usercreatedjobs`,
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
    console.log(data);

    return data;
  };

  try {
    const userJobs = await getAllUserCreatedJobs();
    console.log(userJobs);
    dispatch(
      jobSliceAction.getAllUserCreatedJobs({
        allUserCreatedJobs: userJobs,
      })
    );
  } catch (error) {}
};

// get single job
export const getSingleJobAction = (token, id) => async (dispatch) => {
  const getSingleJob = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/jobs/${id}`,
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
    const job = await getSingleJob();

    dispatch(
      jobSliceAction.getSingleJob({
        job,
      })
    );
  } catch (error) {}
};

// applied job seekers list
export const getAppliedJobSeekersListAction =
  (token, id) => async (dispatch) => {
    const getAppliedJobSeekers = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/jobs/${id}/jobseekers`,
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
      const appliedJobSeekers = await getAppliedJobSeekers();
      console.log(appliedJobSeekers);
      dispatch(
        jobSliceAction.getAppliedJobSeekers({
          appliedJobSeekers,
        })
      );
    } catch (error) {}
  };

// apply for job
export const jobApplyAction = (token, id) => async (dispatch) => {
  const jobCreate = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/jobs/${id}/apply`,
      {
        credentials: "include",
        method: "PUT",
        mode: "cors",

        headers: {
          Authorization: token,
        },
      }
    );

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
