import React from "react";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import QuestionCreateForm from "../../../components/career/qna/QuestionCreateForm";

function CreatePublicQuestion() {
  return (
    <div>
      <Navbar />

      <div className="flex ">
        <CareerSidebar />
        <QuestionCreateForm isPublic={true} />
      </div>
    </div>
  );
}

export default React.memo(CreatePublicQuestion);
