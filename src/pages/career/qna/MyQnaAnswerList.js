import React from "react";
import MyQnaAnswerListItem from "./MyQnaAnswerListItem";

function MyQnaAnswerList() {
  return (
    <div>
      <div className="flex justify-between pt-2">
        <div></div>
        <div className="bg-teal-600 mb-2 text-white font-semibold hover:bg-teal-700 cursor-pointer px-3 py-1  rounded-full ">
          Write Answer
        </div>
      </div>
      <div className="space-y-3  h-full mx-auto pb-44">
        <MyQnaAnswerListItem />
        <MyQnaAnswerListItem />
        <MyQnaAnswerListItem />
        <MyQnaAnswerListItem />
      </div>
    </div>
  );
}

export default React.memo(MyQnaAnswerList);
