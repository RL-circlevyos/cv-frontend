import React from "react";
import MyQuestionListItem from "./MyQuestionListItem";

function MyQuestionList() {
  return (
    <div>
      <div className="mx-auto justify-items-center  space-y-3 h-screen  rounded-md pt-6 pb-44 mr-4 xl:mr-40 overflow-y-auto overscroll-none no-scrollbar ">
        <MyQuestionListItem />
      </div>
    </div>
  );
}

export default React.memo(MyQuestionList);
