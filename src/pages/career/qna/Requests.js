import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import QuestionRequestList from "../../../components/career/qna/QuestionRequestList";
import Navbar from "../../../components/Navbar";
import { getReqQuestionAction } from "../../../store/apps/qna/qna-action";

function Requests() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReqQuestionAction(auth.token));
  }, [dispatch, auth.token]);
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <CareerNavbar isQna={true} />
      <div className="flex  justify-between">
        <CareerSidebar />
        <QuestionRequestList />
      </div>
    </div>
  );
}

export default React.memo(Requests);
