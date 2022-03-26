import React from "react";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import MyQuestionList from "../../../components/career/qna/MyQuestionList";
import Navbar from "../../../components/Navbar";

function MyQna() {
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <CareerNavbar isQna={true} />
      <div className="flex justify-between">
        <CareerSidebar />
        <MyQuestionList />
      </div>
    </div>
  );
}

export default React.memo(MyQna);
