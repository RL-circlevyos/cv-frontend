import React from "react";
import MyQnaAnsDetail from "../../../pages/career/qna/MyQnaAnsDetail";
import Navbar from "../../Navbar";
import CareerNavbar from "../CareerNavbar";
import CareerSidebar from "../CareerSidebar";

function MyQnaSingleQDetail() {
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />

      {/* career navbar */}
      <CareerNavbar isQna={true} />

      <div className="flex justify-between ">
        {/* career sidebar */}
        <CareerSidebar />

        <MyQnaAnsDetail />
      </div>
    </div>
  );
}

export default React.memo(MyQnaSingleQDetail);
