import React from "react";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import SectionHeaders from "../../../components/career/myresources/SectionHeaders";
import StudyMaterialItem from "../../../components/career/myresources/StudyMaterialItem";
import Navbar from "../../../components/Navbar";

function Materials() {
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <CareerNavbar isMyresources={true} />
      <div className="flex">
        <CareerSidebar />

        <div className=""></div>
        <div className="bg-gray-50 px-3 h-screen w-screen overflow-y-auto no-scrollbar">
          <div className="grid grid-rows-2">
            <div>
              <SectionHeaders headerTitle="Notes you can take" router="none" />

              {/* interested course list */}
              <div
                className="grid grid-cols-4 px-5 py-5 gap-6"
                // id="style-8"
              >
                {/* 8 items */}
                <StudyMaterialItem />
                <StudyMaterialItem />
                <StudyMaterialItem />
                <StudyMaterialItem />
              </div>

              <div className="py-3">
                <SectionHeaders
                  headerTitle="Explore Other notes"
                  router="none"
                />

                {/* interested course list */}
                <div
                  className="grid grid-cols-4  px-5 py-5 gap-6"
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
  );
}

export default React.memo(Materials);
