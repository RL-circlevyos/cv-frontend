import React from "react";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import MyJobList from "../../../components/career/ReadyForWork/MyJobList";
import Navbar from "../../../components/Navbar";

function MyJobs() {
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <CareerNavbar isWork={true} />
      <div className="flex justify-between">
        <CareerSidebar />
        <MyJobList />
        <div className="px-10 max-w-md "></div>
      </div>
    </div>
  );
}

export default React.memo(MyJobs);
