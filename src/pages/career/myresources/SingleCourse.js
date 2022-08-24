import React, { useEffect } from "react";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import video from "../../../assets/tmp/Flutter in 100 seconds.mp4";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { Link, useParams, useSearchParams } from "react-router-dom";
import PersonImage from "../../../assets/person.png";
import CourseSection from "./CourseSection";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourseSectionAction,
  getSingleCourseAction,
  getVideoAction,
} from "../../../store/apps/myresources/myresource-action";
import moment from "moment";

function SingleCourse() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { courseSections, courseVideo, courseDetails } = useSelector(
    (state) => state.myresource
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const searchVideoId = searchParams.get("video");
  console.log(searchVideoId);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getCourseSectionAction(token, id));
      dispatch(getSingleCourseAction(id));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, token, id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getVideoAction(token, searchVideoId));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, token, searchVideoId]);

  console.log(courseVideo);

  return (
    <div className="h-screen w-full font-Mulish fixed">
      <Navbar />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50">
          <div>
            <Link to={`/career-guide/myresources/courses`}>
              <ArrowCircleLeftIcon className="h-7 w-7" />
            </Link>
          </div>
          <div className="flex">
            <div>
              <div className="text-2xl font-semibold font-Mulish my-2 mx-2">
                {courseDetails?.course?.name}
              </div>

              <div className="my-2 mx-2 flex items-center space-x-2 ">
                <img
                  src={
                    courseDetails?.course?.user?.photo?.secure_url.photo
                      ?.secure_url
                      ? courseDetails?.course?.user?.photo?.secure_url
                      : PersonImage
                  }
                  className="h-7 w-7 rounded-full"
                  alt=""
                />
                <div>
                  <div>{courseDetails?.course?.user?.name}</div>
                  <div>
                    published on{" "}
                    {moment(courseDetails?.course?.createdAt).format(
                      "MMMM Do YYYY "
                    )}
                  </div>
                </div>
              </div>
              {/* Video and comments */}
              {searchVideoId === null && (
                <img
                  src={courseDetails?.course?.thumbnail?.secure_url}
                  width="900"
                  height="500"
                  className="my-2 mx-2 object-fit rounded-md "
                  alt="course_thumbnail"
                />
              )}
              {searchVideoId !== null && (
                <video
                  width="1000"
                  height="900"
                  src={courseVideo?.singleVideo?.sectionvideo?.secure_url}
                  className="my-2 mx-2 object-fit rounded-md "
                  controls
                >
                  {/* <source src= /> */}
                </video>
              )}
              <div className="text-2xl font-semibold font-Mulish my-2 mx-2">
                {courseVideo?.singleVideo?.videoname}
              </div>
            </div>
            <div className="flex-grow">
              {/* section */}
              <div className="text-3xl text-gray-400 text-center  font-semibold font-Mulish">
                Sections
              </div>

              <div className="mx-10 space-y-3 overflow-y-auto h-screen grid grid-cols-1 grid-rows-2">
                <div>
                  {courseSections?.sections?.map((section) => (
                    <CourseSection
                      sectionname={section?.sectionname}
                      videos={section?.videos}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleCourse);
