import React from "react";
import QuestionRequestListItem from "./QuestionRequestListItem";

function QuestionRequestList() {
  return (
    <div>
      <div className="mx-auto justify-items-center  space-y-3 h-screen  rounded-md pt-6 pb-44 mr-4 xl:mr-40 overflow-y-auto overscroll-none no-scrollbar ">
        <QuestionRequestListItem />
      </div>
    </div>
  );
}

export default React.memo(QuestionRequestList);
