import React from "react";
import PersonImage from "../../../assets/person.png";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import QuesDetailUserAction from "./QuesDetailUserAction";
import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/outline";
import QuesTitleDescription from "./QuesTitleDescription";
import AnswerList from "./AnswerList";

function SingleQuestionDetail() {
  return (
    <div>
      <div className="flex justify-evenly space-y-3 pb-44 h-screen w-screen overflow-y-auto overscroll-none no-scrollbar">
        <div className=" max-w-5xl m-2">
          {/* top */}
          <QuesDetailUserAction isPublic={true} />

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

export default React.memo(SingleQuestionDetail);
