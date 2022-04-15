import React from "react";
import JobSeekersListItem from "./JobSeekersListItem";

function JobSeekersList() {
  return (
    <div>
      <div className="text-2xl font-bold p-2 bg-gray-50 text-purple-700">
        All recommended job seekers
      </div>

      <div className="h-screen w-screen  space-y-2 overflow-y-auto  no-scrollbar px-3 py-2 bg-gray-50">
        <div className="grid grid-rows-2  gap-2">
          <div className="grid grid-cols-2 gap-5 px-32 ">
            <JobSeekersListItem />
            <JobSeekersListItem />
            <JobSeekersListItem />
            <JobSeekersListItem />
            <JobSeekersListItem />
            <JobSeekersListItem />
            <JobSeekersListItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(JobSeekersList);
