import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import {
  createSectionAction,
  getCourseSectionAction,
} from "../../../store/apps/myresources/myresource-action";

function CreateCourse() {
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const { courseid } = useParams();
  const [sectionName, setSectionName] = useState();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { courseSections } = useSelector((state) => state.myresource);
  const formdata = new FormData();

  formdata.append("sectionname", sectionName);

  const sectionCreateHandler = () => {
    setShowModal(false);
    dispatch(createSectionAction(token, formdata, courseid));
  };

  const sectionHandler = () => {
    navigate("/dashboard/mentor/create-courses/12/sections/12");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getCourseSectionAction(token, courseid));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, token, courseid]);

  return (
    <div className="fixed h-screen w-screen">
      <Navbar />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50">
          <div className="flex justify-between mx-4 my-3">
            <div className="text-lg text-purple-600 font-semibold">
              Add sections
            </div>
            <div
              onClick={() => setShowModal(true)}
              className="bg-purple-600 hover:bg-purple-700 px-2 py-1 rounded-lg cursor-pointer text-white"
            >
              Create section
            </div>
            {showModal ? (
              <>
                <div className="ease-in justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Section name</h3>
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
                            Section Name:{" "}
                          </div>
                          <input
                            type="text"
                            onChange={(e) => setSectionName(e.target.value)}
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
                          onClick={sectionCreateHandler}
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
          <div className="h-screen overflow-y-auto">
            <div className="grid grid-cols-2 gap-5 mx-10">
              {courseSections?.sections?.length === 0 && (
                <h1> No Sections Crested, create one</h1>
              )}
              {courseSections?.sections?.map((section) => (
                <>
                  <Link
                    to={`/dashboard/mentor/create-courses/${courseid}/sections/${section?._id}`}
                    className="bg-white shadow-md px-4 py-1 rounded-md w-1/2 text-lg font-bold cursor-pointer"
                  >
                    {section?.sectionname}
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CreateCourse);
