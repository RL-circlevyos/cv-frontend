import React from "react";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import JobSeekersList from "../../../components/career/JobSeekersList";
import Navbar from "../../../components/Navbar";

function JobSeekers() {
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <CareerNavbar isJobProviderDashboard={true} />
      <div className="flex justify-between">
        <CareerSidebar />
        <JobSeekersList />
      </div>
    </div>
  );
}

export default React.memo(JobSeekers);
