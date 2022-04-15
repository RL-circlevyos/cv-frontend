import React from "react";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import StudyMaterialItem from "../../../components/career/myresources/StudyMaterialItem";

import { Link } from "react-router-dom";

function MentorDashboard() {
  return (
    <div className="h-screen w-screen fixed">
      <Navbar />
      <CareerNavbar isMentorDashBoard={true} />

      <div className="flex">
        <CareerSidebar />

        <div className="h-screen w-screen bg-gray-50">
          <div className="px-5 flex items-center justify-between ">
            <div className="text-2xl text-purple-800 font-medium pb-2">
              {" "}
              Your Notes
            </div>
            <Link
              to="/dashboard/mentor/create-note"
              className="bg-purple-600 hover:bg-purple-700 cursor-pointer font-semibold rounded-md text-white my-2 px-2 py-2 h-fit w-fit"
            >
              {" "}
              Create Notes
            </Link>
          </div>
          <div className="h-screen  overflow-y-auto no-scrollbar">
            <div className="grid grid-rows-2">
              <div>
                <div className="py-3">
                  {/* interested course list */}
                  <div
                    className="grid grid-cols-6  px-5 py-5 gap-6"
                    // id="style-8"
                  >
                    <StudyMaterialItem />
                    <StudyMaterialItem />
                    <StudyMaterialItem />
                    <StudyMaterialItem />
                    <StudyMaterialItem />
                    <StudyMaterialItem />
                    <StudyMaterialItem />
                    <StudyMaterialItem />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MentorDashboard);
