import { BriefcaseIcon, CogIcon, CreditCardIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import WorkItem from "../../../components/career/ReadyForWork/WorkItem";
import RecommendedJobs from "../../../components/career/ReadyForWork/RecommendedJobs";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobAction } from "../../../store/apps/job/job-action";

function Work() {
  const auth = useSelector((state) => state.auth);
  const { token } = auth;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobAction(token));
  }, [dispatch, token]);
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <CareerNavbar isWork={true} />
      <div className="flex justify-between ">
        <CareerSidebar />

        {/* Recommended jobs */}

        <RecommendedJobs />

        <div className="px-10 max-w-md ">
          <div className="p-3 mb-5 text-center text-sm font-semibold text-gray-600 border-b-2 border-gray-500">
            Resume
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default React.memo(Work);
