import React, { useEffect } from "react";

import QuesDetailUserAction from "./QuesDetailUserAction";

import QuesTitleDescription from "./QuesTitleDescription";
import AnswerList from "./AnswerList";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getAnswersAction,
  getSingleQuestionAction,
} from "../../../store/apps/qna/qna-action";
import { useSelector } from "react-redux";

function SingleQuestionDetail() {
  const { id } = useParams();
  const auth = useSelector((state) => state.auth);
  const { token } = auth;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleQuestionAction(id, token));
    dispatch(getAnswersAction(id, token));
  }, [dispatch, token, id]);

  return (
    <div>
      <div className="flex justify-evenly space-y-3 pb-44 h-screen w-screen mx-auto overflow-y-auto overscroll-none no-scrollbar">
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
