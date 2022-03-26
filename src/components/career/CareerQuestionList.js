import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import CareerQuestionListItem from "./CareerQuestionListItem";

function CareerQuestionList() {
  return (
    <div>
      <div className="mx-auto justify-items-center  space-y-3 h-screen  rounded-md pt-6 pb-44 mr-4 xl:mr-40 overflow-y-auto overscroll-none no-scrollbar ">
        <CareerQuestionListItem />
        <CareerQuestionListItem />
        <CareerQuestionListItem />
      </div>
    </div>
  );
}

export default React.memo(CareerQuestionList);
