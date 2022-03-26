import { BriefcaseIcon, CogIcon, CreditCardIcon } from "@heroicons/react/solid";
import React from "react";
import Navbar from "../../../components/Navbar";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import WorkItem from "../../../components/career/ReadyForWork/WorkItem";
import RecommendedJobs from "../../../components/career/ReadyForWork/RecommendedJobs";

function Work() {
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <CareerNavbar />
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
    </div>
  );
}

export default React.memo(Work);
