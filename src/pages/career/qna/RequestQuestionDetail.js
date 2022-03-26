import React from "react";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import RequestSingleQuestionDetail from "../../../components/career/qna/RequestSingleQuestionDetail";
import Navbar from "../../../components/Navbar";

function RequestQuestionDetail() {
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />

      <CareerNavbar />
      <div className="flex justify-between">
        <CareerSidebar />
        <RequestSingleQuestionDetail />
      </div>
    </div>
  );
}

export default React.memo(RequestQuestionDetail);
