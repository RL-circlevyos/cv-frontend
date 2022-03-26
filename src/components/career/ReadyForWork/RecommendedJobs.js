import React from "react";
import WorkItem from "./WorkItem";

function RecommendedJobs() {
  return (
    <div className="">
      <div className="text-2 xl font-bold p-2 bg-gray-50 text-purple-700">
        Recommended Jobs
      </div>

      <div className="h-screen  space-y-2 overflow-y-auto no-scrollbar px-3 py-2 bg-gray-50">
        <div className="grid grid-rows-2  gap-2">
          <div className="grid grid-cols-2 gap-10  ">
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(RecommendedJobs);
