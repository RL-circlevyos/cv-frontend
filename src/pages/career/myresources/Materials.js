import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import SectionHeaders from "../../../components/career/myresources/SectionHeaders";
import StudyMaterialItem from "../../../components/career/myresources/StudyMaterialItem";
import Navbar from "../../../components/Navbar";
import { getAllNotesAction } from "../../../store/apps/myresources/myresource-action";

function Materials() {
  const { token } = useSelector((state) => state.auth);
  const { allMaterials } = useSelector((state) => state.myresource);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotesAction(token));
  }, [dispatch, token]);

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
                {allMaterials?.materials?.map((material) => (
                  <>
                    <StudyMaterialItem
                      key={material?._id}
                      id={material?._id}
                      username={material?.user?.name}
                      thumbnail={material?.thumbnail?.secure_url}
                      name={material?.name}
                    />
                  </>
                ))}
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
