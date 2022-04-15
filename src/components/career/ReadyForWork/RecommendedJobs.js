import React from "react";
import { useSelector } from "react-redux";
import WorkItem from "./WorkItem";

function RecommendedJobs() {
  const { allJobs } = useSelector((state) => state.job);
  console.log(allJobs);
  return (
    <div className=" flex-1 ">
      <div className="text-2 xl font-bold p-2 bg-gray-50 text-purple-700">
        Recommended Jobs
      </div>

      <div className="h-screen  space-y-2 overflow-y-auto no-scrollbar px-3 py-2 bg-gray-50">
        <div className="grid grid-rows-2  gap-2">
          <div className="grid grid-cols-2 gap-10  ">
            {allJobs?.jobs?.map((job) => (
              <>
                <WorkItem
                  jobtitle={job?.title}
                  experience={job?.experience}
                  jobtype={job?.jobtype}
                  requirements={job?.requirements}
                  salary={job?.salary}
                  username={job?.user?.name}
                  userprofileimg={job?.user?.photo?.secure_url}
                  key={job?._id}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(RecommendedJobs);
