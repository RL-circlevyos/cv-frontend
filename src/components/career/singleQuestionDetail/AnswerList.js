import React from "react";
import AnswerListItem from "./AnswerListItem";

function AnswerList() {
  return (
    <div className="border-t-2 ">
      <div className="flex justify-between pt-2">
        <div></div>
        <div className="bg-teal-600 mb-2 text-white font-semibold hover:bg-teal-700 cursor-pointer px-3 py-1  rounded-full ">
          Write Answer
        </div>
      </div>
      <div className="space-y-3  h-full mx-auto pb-44">
        <AnswerListItem />
        <AnswerListItem />
        <AnswerListItem />
        <AnswerListItem />
      </div>
    </div>
  );
}

export default React.memo(AnswerList);
