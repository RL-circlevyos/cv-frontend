import React from "react";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import video from "../../../assets/tmp/Flutter in 100 seconds.mp4";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import PersonImage from "../../../assets/person.png";
import CourseSection from "./CourseSection";

function SingleCourse() {
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
              {/* Video and comments */}
              <video
                width="1000"
                height="900"
                className="my-2 mx-2 object-fit rounded-md "
                controls
              >
                <source src={video} />
              </video>

              <div className="text-2xl font-semibold font-Mulish my-2 mx-2">
                Name of the course
              </div>

              <div className="my-2 mx-2 flex items-center space-x-2 ">
                <img
                  src={PersonImage}
                  className="h-7 w-7 rounded-full"
                  alt=""
                />
                <div>
                  <div>User name</div>
                  <div>published on Date</div>
                </div>
              </div>
            </div>
            <div className="flex-grow">
              {/* section */}
              <div className="text-3xl text-gray-400 text-center  font-semibold font-Mulish">
                Sections
              </div>

              <div className="mx-10 space-y-3 overflow-y-auto h-screen grid grid-cols-1 grid-rows-2">
                <div>
                  <CourseSection />
                  <CourseSection />
                  <CourseSection />
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
