import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import CourseItem from "../../../components/career/myresources/courseItem";

import SectionHeaders from "../../../components/career/myresources/SectionHeaders";

import ExamItem from "../../../components/career/myresources/ExamItem";
import BookItem from "../../../components/career/myresources/BookItem";
import StudyMaterialItem from "../../../components/career/myresources/StudyMaterialItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getAllCourseAction,
  getAllNotesAction,
} from "../../../store/apps/myresources/myresource-action";
import CareerStatus from "../../../components/career/myresources/CareerStatus";

function MyResources() {
  const { allCourses, allMaterials } = useSelector((state) => state.myresource);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getAllCourseAction(auth.token));
      dispatch(getAllNotesAction(auth.token));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, auth.token]);

  const slicedArrayCourses = allCourses?.courses?.slice(0, 4);
  const slicedArrayMaterials = allMaterials?.materials?.slice(0, 4);
  return (
    <div className="h-screen w-screen font-Mulish fixed">
      <Navbar />
      <div>
        <CareerNavbar isMyresources={true} />
        <div className="flex">
          <CareerSidebar />

          {/* career rources list */}
          <div className="bg-gray-50 px-3 h-screen w-screen overflow-y-auto no-scrollbar ">
            {/* section 1 */}
            <CareerStatus />

            {/* section 2 */}
            <div className="py-4">
              <SectionHeaders
                headerTitle="Courses you might be interested in"
                router="/career-guide/myresources/courses"
              />

              {/* course List */}
              <div
                className="grid grid-cols-4 px-5 py-5 space-x-6"
                // id="style-8"
              >
                {slicedArrayCourses?.map((course) => (
                  <>
                    <CourseItem
                      coursename={course?.name}
                      thumbail={course?.thumbnail?.secure_url}
                      username={course?.user?.name}
                      userprofile={course?.user?.photo?.secure_url}
                    />
                  </>
                ))}
                {/* <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem /> */}
              </div>
            </div>

            {/* section 3 */}
            <div className="py-4 ">
              <SectionHeaders
                headerTitle="Upcoming & interested exams"
                router="/career-guide/myresources/exams"
              />

              <div className="grid grid-cols-3 gap-2 grid-rows-1 x-5 py-5 space-x-6">
                {/* exam item */}
                <ExamItem />
                <ExamItem />
                <ExamItem />
              </div>
            </div>

            {/* Section 4 */}
            <div className="py-4">
              <SectionHeaders
                headerTitle="Books you might be interested in"
                router="/career-guide/myresources/books"
              />
              <div className="grid grid-cols-6  gap-2 x-5 py-5 space-x-6">
                {/* book item */}
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
              </div>
            </div>

            {/* Section 5 */}
            <div className="py-4">
              <SectionHeaders
                headerTitle="Study Materials you can follow"
                router="/career-guide/myresources/books"
              />
              <div className="grid grid-cols-6 grid-rows-2 gap-2 x-5 py-5 space-x-6">
                {/* book item */}
                {slicedArrayMaterials?.map((material) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MyResources);
