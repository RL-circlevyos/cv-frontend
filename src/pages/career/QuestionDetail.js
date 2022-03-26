import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import React from "react";
import CareerSidebar from "../../components/career/CareerSidebar";
import Navbar from "../../components/Navbar";
import PersonImage from "../../assets/person.png";
import CareerNavbar from "../../components/career/CareerNavbar";
import SingleQuestionDetail from "../../components/career/singleQuestionDetail/SingleQuestionDetail";

function QuestionDetail() {
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />

      {/* career navbar */}
      <CareerNavbar isQna={true} />

      <div className="flex justify-between ">
        {/* career sidebar */}
        <CareerSidebar />

        <SingleQuestionDetail />
      </div>
    </div>
  );
}

export default React.memo(QuestionDetail);
