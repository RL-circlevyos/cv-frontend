import React from "react";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import QuestionRequestList from "../../../components/career/qna/QuestionRequestList";
import Navbar from "../../../components/Navbar";

function Requests() {
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
