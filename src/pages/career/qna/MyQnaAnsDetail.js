import React from "react";
import MyQnaAnswerList from "./MyQnaAnswerList";
import MyQnaDetailUserAction from "./MyQnaDetailUserAction";
import MyQnaTitleDescription from "./MyQnaTitleDescription";

function MyQnaAnsDetail() {
  return (
    <div>
      <div className="flex justify-evenly space-y-3 pb-44 h-screen w-screen overflow-y-auto overscroll-none no-scrollbar">
        <div className=" max-w-5xl m-2">
          {/* top */}
          <MyQnaDetailUserAction />

          {/* question detail */}
          <MyQnaTitleDescription />

          {/* Answer */}
          <div className="text-teal-600 font-semibold ">Answer</div>
          <MyQnaAnswerList />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default React.memo(MyQnaAnsDetail);
