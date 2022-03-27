import React from "react";
import MyjobListItem from "./MyjobListItem";
import WorkItem from "./WorkItem";

function MyJobList() {
  return (
    <div className="">
      <div className="text-2 xl font-bold p-2 bg-gray-50 text-purple-700">
        My job posts
      </div>

      <div className="h-screen  space-y-2 overflow-y-auto no-scrollbar px-3 py-2 bg-gray-50">
        <div className="grid grid-rows-2  gap-2">
          <div className="grid grid-cols-2 gap-10  ">
            <MyjobListItem />
            <MyjobListItem />
            <MyjobListItem />
            <MyjobListItem />
            <MyjobListItem />
            <MyjobListItem />
            <MyjobListItem />
            <MyjobListItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MyJobList);
