import React, { useEffect } from "react";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import StudyMaterialItem from "../../../components/career/myresources/StudyMaterialItem";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotesAction } from "../../../store/apps/myresources/myresource-action";

function MentorDashboard() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { userMaterials } = useSelector((state) => state.myresource);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getUserNotesAction(token));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, token]);

  console.log(userMaterials);

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
                    {userMaterials?.studyMaterials?.map((material) => (
                      <>
                        <StudyMaterialItem
                          key={material?._id}
                          id={material?._id}
                          name={material?.name}
                          username={material?.user?.name}
                          thumbnail={material?.thumbnail?.secure_url}
                        />
                      </>
                    ))}
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
