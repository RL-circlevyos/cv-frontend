import React from "react";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";

function JobProviderDashboard() {
  return (
    <div>
      <Navbar />
      <CareerNavbar isJobProviderDashboard={true} />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50 px-3 py-3">
          <div className="border-b-2 ">
            <div className="text-3xl font-semibold text-teal-800">
              Organization name
            </div>
            <div className="flex space-x-2 items-center">
              <div className="text-base  text-gray-500 ">location</div>
              <div className="text-xl font-gray-500 text-gray-500">•</div>
              <div className="text-base text-gray-500">
                type of organization
              </div>
            </div>
          </div>
          <div className="pt-5 space-x-3 space-y-3">
            <div className="text-xl font-semibold text-gray-500">
              Current technology stack
            </div>
            <div className="grid grid-cols-10 gap-1">
              <div>React</div>
              <div>React</div>
              <div>React</div>
              <div>React</div>
              <div>React</div>
              <div>React</div>
              <div>React</div>
              <div>React</div>
              <div>React</div>
            </div>
          </div>
          <div className="flex justify-around py-20">
            <div className="bg-white shadow-lg  text-center px-2 py-4">
              <div className="text-xl text-gray-500  font-semibold">
                Total job description
              </div>
              <div className="font-bold text-2xl"> 12</div>
            </div>
            <div className="bg-white shadow-lg text-center px-2 py-4">
              <div className="text-xl text-gray-500 font-semibold">
                Total candidates applied
              </div>
              <div className="font-bold text-2xl"> 12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(JobProviderDashboard);
