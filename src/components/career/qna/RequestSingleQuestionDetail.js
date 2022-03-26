import React from "react";
import AnswerList from "../singleQuestionDetail/AnswerList";
import QuesDetailUserAction from "../singleQuestionDetail/QuesDetailUserAction";
import QuesTitleDescription from "../singleQuestionDetail/QuesTitleDescription";

function RequestSingleQuestionDetail() {
  return (
    <div>
      <div className="flex justify-evenly space-y-3 pb-44 h-screen w-screen overflow-y-auto overscroll-none no-scrollbar">
        <div className=" max-w-5xl m-2">
          {/* top */}
          <QuesDetailUserAction isRequestQDetail={true} />

          {/* question detail */}
          <QuesTitleDescription />

          {/* Answer */}
          <div className="text-teal-600 font-semibold ">Answer</div>
          <AnswerList />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default React.memo(RequestSingleQuestionDetail);
