import { LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import CourseItem from "../../../components/career/myresources/courseItem";
import Navbar from "../../../components/Navbar";
import {
  createCourseAction,
  getMyCourseAction,
} from "../../../store/apps/myresources/myresource-action";

function MyCoure() {
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [name, setName] = useState();
  const [details, setDetails] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [price, setPrice] = useState();
  const isCreating = useSelector((state) => state.myresource.isCreating);

  const { userCourses } = useSelector((state) => state.myresource);
  const thumbnailHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setThumbnail(e.target.files[0]);
    }
  };

  const formdata = new FormData();

  formdata.append("name", name);
  formdata.append("details", details);
  formdata.append("thumbnail", thumbnail);

  const courseCreateHandler = () => {
    setShowModal(false);
    dispatch(createCourseAction(token, formdata));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getMyCourseAction(token));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, token]);

  return (
    <div className="fixed h-screen w-screen">
      <Navbar />
      <CareerNavbar isMentorDashBoard={true} />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50">
          {isCreating && (
            <span className="text-lg text-primary block mt-4 mb-4 w-full">
              {" "}
              <LinearProgress color="success" />
              <span className="text-base leading-relaxed italic font-semibold flex justify-center items-center">
                Creating...
              </span>
            </span>
          )}
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-purple-700 mx-2">
              Your courses
            </div>
            <div
              onClick={() => setShowModal(true)}
              className="bg-purple-600 hover:bg-purple-700  mx-3 my-3 px-2 py-2 text-white font-semibold rounded-md cursor-pointer"
            >
              Create course
            </div>
            {showModal ? (
              <>
                <div className="ease-in justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Create course name
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto space-y-2">
                        <div>
                          <div className="text-lg font-medium text-gray-400">
                            Course Name:{" "}
                          </div>
                          <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="px-2 rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                          />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-gray-400">
                            Details:{" "}
                          </div>
                          <textarea
                            onChange={(e) => setDetails(e.target.value)}
                            type="text"
                            className="px-2 rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                          />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-gray-400">
                            Thumbnail:{" "}
                          </div>
                          <input
                            onChange={thumbnailHandler}
                            type="file"
                            accept="image/*"
                            className="px-2 rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                          />
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={courseCreateHandler}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
          <div className="bg-gray-50 px-3 h-screen  overflow-y-auto no-scrollbar">
            <div className="grid grid-rows-2">
              <div
                className="grid grid-cols-4 px-5 py-5 gap-6"
                // id="style-8"
              >
                {userCourses?.courses?.map((course) => (
                  <>
                    <CourseItem
                      key={course?._id}
                      id={course?._id}
                      isMentorDashBoard={true}
                      coursename={course?.name}
                      thumbail={course?.thumbnail?.secure_url}
                      username={course?.user?.name}
                      userprofile={course?.user?.photo?.secure_url}
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

export default React.memo(MyCoure);
