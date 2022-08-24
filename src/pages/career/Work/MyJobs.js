import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import MyJobList from "../../../components/career/ReadyForWork/MyJobList";
import Navbar from "../../../components/Navbar";
import { getAllUserCreatedJobAction } from "../../../store/apps/job/job-action";

function MyJobs() {
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <CareerNavbar isJobProviderDashboard={true} />
      <div className="flex justify-between">
        <CareerSidebar />
        <MyJobList />
        <div className="px-10 max-w-md "></div>
      </div>
    </div>
  );
}

export default React.memo(MyJobs);
