import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import CourseItem from "../../../components/career/myresources/courseItem";
import SectionHeaders from "../../../components/career/myresources/SectionHeaders";
import Navbar from "../../../components/Navbar";
import { getAllCourseAction } from "../../../store/apps/myresources/myresource-action";

function Course() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { allCourses } = useSelector((state) => state.myresource);

  useEffect(() => {
    dispatch(getAllCourseAction(auth.token));
  }, [dispatch, auth.token]);

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
              <SectionHeaders
                headerTitle="Courses you might be interested in"
                router="none"
              />

              {/* interested course list */}
              <div
                className="grid grid-cols-4 px-5 py-5 gap-6"
                // id="style-8"
              >
                {allCourses?.courses?.map((course) => (
                  <>
                    <CourseItem
                      coursename={course?.name}
                      thumbail={course?.thumbnail?.secure_url}
                      username={course?.user?.name}
                      userprofile={course?.user?.photo?.secure_url}
                    />
                  </>
                ))}
              </div>

              <div className="py-3">
                <SectionHeaders headerTitle="Trending & others" router="none" />

                {/* interested course list */}
                <div
                  className="grid grid-cols-4  px-5 py-5 gap-6"
                  // id="style-8"
                >
                  {/* 8 items */}
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Course);
