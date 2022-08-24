import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserCreatedJobAction } from "../../../store/apps/job/job-action";
import MyjobListItem from "./MyjobListItem";

function MyJobList() {
  const { allUserCreatedJobs } = useSelector((state) => state.job);
  console.log(allUserCreatedJobs);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllUserCreatedJobAction(token));
  }, [token, dispatch]);
  return (
    <div className="">
      <div className="text-2 xl font-bold p-2 bg-gray-50 text-purple-700">
        My job posts
      </div>

      <div className="h-screen  space-y-2 overflow-y-auto no-scrollbar px-3 py-2 bg-gray-50">
        <div className="grid grid-rows-2  gap-2">
          <div className="grid grid-cols-2 gap-10  ">
            {allUserCreatedJobs?.userCreatedjobs?.map((job) => (
              <MyjobListItem
                key={job?._id}
                id={job?._id}
                jobtitle={job?.title}
                experience={job?.experience}
                requirements={job?.requirements}
                salary={job?.salary}
                jobtype={job?.jobtype}
                jobseekerslength={job?.jobseekers?.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MyJobList);
