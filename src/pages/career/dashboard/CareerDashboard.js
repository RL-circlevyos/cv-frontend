import {
  UploadIcon,
  PlusCircleIcon,
  DocumentIcon,
} from "@heroicons/react/solid";
import { LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import SkeleteSubjectSyllabus from "../../../components/SkeletonLoader/SkeleteSubjectSyllabus";
import SkeletonContentLeader from "../../../components/SkeletonLoader/SkeletonContentLeader";
import { AuthState } from "../../../store/apps/auth/auth-action";
import {
  addSkillAction,
  createCareerDetailAction,
  getCareerDetailAction,
  getUserRequestedSubjectSyllabusAction,
  updateCareerDetailAction,
  uploadResumeAction,
} from "../../../store/apps/career/career-action";
import CareerSubjectItem from "./CareerSubjectItem";
import MockTestList from "./MockTestList";
import SkillItem from "./SkillItem";
import SkillTests from "./SkillTests";

function CareerDashboard() {
  const [showModal, setShowModal] = React.useState(false);
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [showResumeModal, setshowResumeModal] = React.useState(false);
  const [showSkillAddModal, setShowSkillAddModal] = React.useState(false);
  const [instituteName, setInstituteName] = useState();
  const [currentStatus, setCurrentStatus] = useState();
  const [stream, setStream] = useState();
  const [semester, setSemester] = useState();
  const [department, setDepartment] = useState();
  const [affiliate, setAffiliate] = useState();
  const [isStatusUpdate, setisStatusUpdate] = useState(false);
  const [skill, setSkill] = useState();

  const { career, isUploading, isLoading, subjectandsyllabus } = useSelector(
    (state) => state.career
  );
  const { userDetails, token } = useSelector((state) => state.auth);

  console.log(userDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jobprofileCreateHandler = async () => {
    const data = await createJobprofile();
    console.log(data);
    // navigate(`/dashboard/career/jobprofile/${res.id}`);
  };

  const createJobprofile = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/jobprofile-create`,
      {
        credentials: "include",
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw Error("Error occured in form fetch");
    }

    const data = await response.json();
    return data;
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getCareerDetailAction(token, userDetails?.career));
      dispatch(
        getUserRequestedSubjectSyllabusAction(
          career?.currentstatus,
          career?.affiliates,
          career?.department,
          career?.semester
        )
      );
      setisStatusUpdate(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [
    isStatusUpdate,
    dispatch,
    token,
    userDetails?.career,
    career?.currentstatus,
    career?.affiliates,
    career?.department,
    career?.semester,
  ]);

  function careerCreateHandler() {
    const careerBody = {
      currentstatus: currentStatus,
      institutename: instituteName,
      stream: stream,
      semester: semester,
      affiliates: affiliate,
      department: department,
    };
    dispatch(createCareerDetailAction(token, careerBody));
    setShowCreateModal(false);
  }

  const [instituteNameUpdate, setInstituteNameUpdate] = useState();
  const [currentStatusUpdate, setCurrentStatusUpdate] = useState();
  const [streamUpdate, setStreamUpdate] = useState();
  const [semesterUpdate, setSemesterUpdate] = useState();
  const [departmentUpdate, setDepartmentUpdate] = useState();
  const [affiliateUpdate, setAffiliateUpdate] = useState();

  function updateCurrentStatus() {
    const careerBody = {
      currentstatus: currentStatusUpdate ? currentStatusUpdate : currentStatus,
      institutename: instituteNameUpdate ? instituteNameUpdate : instituteName,
      stream: streamUpdate ? streamUpdate : stream,
      semester: semesterUpdate ? semesterUpdate : semester,
      affiliates: affiliateUpdate ? affiliateUpdate : affiliate,
      department: departmentUpdate ? departmentUpdate : department,
    };

    dispatch(updateCareerDetailAction(token, careerBody, career._id));
    setShowModal(false);
    setisStatusUpdate(true);
  }
  const [resumefile, setresumefile] = useState();
  const resumebody = new FormData();
  resumebody.append("resume", resumefile);

  console.log(career);

  function resumeUpload() {
    dispatch(uploadResumeAction(token, resumebody));
    setshowResumeModal(false);
  }

  const [isSkilladd, setisSkilladd] = useState(false);

  useEffect(() => {
    if (isSkilladd) {
      dispatch(AuthState(token));
      setisSkilladd(false);
    }
  }, [dispatch, token, isSkilladd]);

  function addSkillHandler() {
    const skillbody = {
      skillname: skill,
    };
    dispatch(addSkillAction(token, skillbody));
    setShowSkillAddModal(false);
    setisSkilladd(true);
  }

  return (
    <div className="h-screen w-screen fixed">
      <Navbar />
      <CareerNavbar isCareerDashBoard={true} />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50">
          {/* Basic info of career */}
          {career?._id ? (
            <div className="flex">
              <div className="border-b-2 px-3 py-2 mx-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="text-lg font-semibold text-green-700">
                    Current Status&nbsp;:
                  </div>
                  <div>
                    You are now in{" "}
                    <span className="font-bold text-xl">
                      {career?.currentstatus}
                    </span>{" "}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <div className="text-lg font-semibold text-green-700">
                    Institute Name&nbsp;:
                  </div>
                  <div>{career?.institutename}</div>
                </div>

                <div className="flex space-x-2">
                  <div className="flex space-x-2">
                    <div className="text-lg font-semibold text-green-700">
                      {career?.currentstatus === "college" ? "Sem" : "Class"}
                    </div>
                    <div className="font-bold text-xl">{career?.semester}</div>
                  </div>

                  <div className="flex space-x-2">
                    <div className="text-lg font-semibold text-green-700">
                      {career?.currentstatus === "college"
                        ? "Affiliates"
                        : "Board"}
                    </div>
                    <div className="font-bold text-xl">
                      {career?.affiliates}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <div className="text-lg font-semibold text-green-700">
                      Department:
                    </div>
                    <div className="font-bold text-xl">
                      {career?.department}
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setShowModal(true)}
                className="bg-teal-600 hover:bg-teal-700 cursor-pointer h-fit px-2 py-1 my-2 text-white rounded-md font-semibold"
              >
                Update
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
                            Update Your current status of studying{" "}
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
                              Current status:
                            </div>
                            <select
                              name="currentStatus"
                              id="currentStatus"
                              onChange={(e) =>
                                setCurrentStatusUpdate(e.target.value)
                              }
                              className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                            >
                              <option value="">Selete</option>
                              {/* <option value="school">School</option> */}
                              <option value="college">College</option>
                              {/* <option value="job">In Job</option> */}
                            </select>
                          </div>
                          <div>
                            <div className="text-lg font-medium text-gray-400">
                              Institution Name:{" "}
                            </div>
                            <input
                              type="text"
                              onChange={(e) =>
                                setInstituteNameUpdate(e.target.value)
                              }
                              className="px-2 rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                            />
                          </div>
                          {currentStatusUpdate === "school" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Class:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete class</option>
                                <option value="XI">XI</option>
                                <option value="XII">XII</option>
                              </select>
                            </div>
                          )}
                          {currentStatusUpdate === "school" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Board:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete Board</option>
                                <option value="wbchse">WBCHSE</option>
                                <option value="cbse">CBSE</option>
                                <option value="icse">ICSE</option>
                              </select>
                            </div>
                          )}
                          {currentStatusUpdate === "college" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Sem:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                onChange={(e) =>
                                  setSemesterUpdate(e.target.value)
                                }
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete semester</option>
                                <option value="1">Sem1</option>
                                <option value="2">Sem2</option>
                                <option value="3">Sem3</option>
                                <option value="4">Sem4</option>
                                <option value="5">Sem5</option>
                                <option value="6">Sem6</option>

                                <option value="7">Sem7</option>
                                <option value="8">Sem8</option>
                              </select>
                            </div>
                          )}
                          {currentStatusUpdate === "college" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Affiliates:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                onChange={(e) =>
                                  setAffiliateUpdate(e.target.value)
                                }
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete Affiliation</option>
                                <option value="MAKAUT">MAKAUT</option>
                                <option value="OTHER">other</option>
                              </select>
                            </div>
                          )}
                          {currentStatusUpdate === "college" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Stream:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                onChange={(e) =>
                                  setStreamUpdate(e.target.value)
                                }
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete stream</option>
                                <option value="engineering">Engineering</option>
                                {/* <option value="medical">Medical</option>
                              <option value="commerce">Commerce</option> */}
                                {/* <option value="agriculture">Agriculture</option> */}
                                {/* <option value="law">Law</option>
                              <option value="humanities">Humanities</option>
                              <option value="animation">Animation</option>
                              <option value="arts">Arts</option>
                              <option value="aviation">Aviation</option>
                              <option value="masscomm">Mass Comm</option>
                              <option value="paramedical">Paramedical</option>
                              <option value="architecture">Architecture</option>
                              <option value="hotelmgmt">Hotel Mgmt</option>
                              <option value="hotelmgmt">Hotel Mgmt</option>
                              <option value="veterinary">Veterinary Sc</option>
                              <option value="veterinary">Vocational</option> */}
                              </select>
                            </div>
                          )}
                          {currentStatusUpdate === "college" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Department:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                onChange={(e) =>
                                  setDepartmentUpdate(e.target.value)
                                }
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete Department</option>
                                <option value="CSE">CSE</option>
                                <option value="ECE">ECE</option>
                                <option value="EE">EE</option>
                                <option value="ME">ME</option>
                                <option value="CIVIL">CIVIL</option>
                              </select>
                            </div>
                          )}
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
                            onClick={updateCurrentStatus}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          ) : (
            <div>
              <div
                onClick={() => setShowCreateModal(true)}
                className="bg-teal-600 hover:bg-teal-700 cursor-pointer w-min h-fit px-2 py-1 my-2 text-white rounded-md font-semibold"
              >
                Add&nbsp;Career&nbsp;Details
              </div>

              {showCreateModal ? (
                <>
                  <div className="ease-in justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Update Your current status of studying{" "}
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowCreateModal(false)}
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
                              Current status:
                            </div>
                            <select
                              name="currentStatus"
                              id="currentStatus"
                              onChange={(e) => setCurrentStatus(e.target.value)}
                              className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                            >
                              <option value="">Selete</option>
                              {/* <option value="school">School</option> */}
                              <option value="college">College</option>
                              {/* <option value="job">In Job</option> */}
                            </select>
                          </div>
                          <div>
                            <div className="text-lg font-medium text-gray-400">
                              Institution Name:{" "}
                            </div>
                            <input
                              type="text"
                              onChange={(e) => setInstituteName(e.target.value)}
                              className="px-2 rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                            />
                          </div>
                          {currentStatus === "school" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Class:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete class</option>
                                <option value="XI">XI</option>
                                <option value="XII">XII</option>
                              </select>
                            </div>
                          )}
                          {currentStatus === "school" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Board:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete Board</option>
                                <option value="wbchse">WBCHSE</option>
                                <option value="cbse">CBSE</option>
                                <option value="icse">ICSE</option>
                              </select>
                            </div>
                          )}
                          {currentStatus === "college" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Sem:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                onChange={(e) => setSemester(e.target.value)}
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete semester</option>
                                <option value="1">Sem1</option>
                                <option value="2">Sem2</option>
                                <option value="3">Sem3</option>
                                <option value="4">Sem4</option>
                                <option value="5">Sem5</option>
                                <option value="6">Sem6</option>

                                <option value="7">Sem7</option>
                                <option value="8">Sem8</option>
                              </select>
                            </div>
                          )}
                          {currentStatus === "college" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Affiliates:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                onChange={(e) => setAffiliate(e.target.value)}
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete Affiliation</option>
                                <option value="MAKAUT">MAKAUT</option>
                                <option value="OTHER">other</option>
                              </select>
                            </div>
                          )}
                          {currentStatus === "college" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Stream:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                onChange={(e) => setStream(e.target.value)}
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete stream</option>
                                <option value="engineering">Engineering</option>
                                {/* <option value="medical">Medical</option>
                              <option value="commerce">Commerce</option> */}
                                {/* <option value="agriculture">Agriculture</option> */}
                                {/* <option value="law">Law</option>
                              <option value="humanities">Humanities</option>
                              <option value="animation">Animation</option>
                              <option value="arts">Arts</option>
                              <option value="aviation">Aviation</option>
                              <option value="masscomm">Mass Comm</option>
                              <option value="paramedical">Paramedical</option>
                              <option value="architecture">Architecture</option>
                              <option value="hotelmgmt">Hotel Mgmt</option>
                              <option value="hotelmgmt">Hotel Mgmt</option>
                              <option value="veterinary">Veterinary Sc</option>
                              <option value="veterinary">Vocational</option> */}
                              </select>
                            </div>
                          )}
                          {currentStatus === "college" && (
                            <div>
                              <div className="text-lg font-medium text-gray-400">
                                Department:
                              </div>
                              <select
                                name="currentStatus"
                                id="currentStatus"
                                onChange={(e) => setDepartment(e.target.value)}
                                className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                              >
                                <option value="">Selete Department</option>
                                <option value="CSE">CSE</option>
                                <option value="ECE">ECE</option>
                                <option value="EE">EE</option>
                                <option value="ME">ME</option>
                                <option value="CIVIL">CIVIL</option>
                              </select>
                            </div>
                          )}
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowCreateModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={careerCreateHandler}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          )}

          {/* Subjects and skill */}
          <div className="flex mx-3 my-3 ">
            <div className="">
              {/* Subjects */}
              <div className="text-2xl text-purple-800 font-medium pb-2">
                Your Subjects And syllabus
              </div>
              {isLoading && (
                <div className="border-b-2 pb-2 grid grid-cols-3 gap-2">
                  <SkeleteSubjectSyllabus />
                  <SkeleteSubjectSyllabus />
                  <SkeleteSubjectSyllabus />
                  <SkeleteSubjectSyllabus />
                  <SkeleteSubjectSyllabus />
                  <SkeleteSubjectSyllabus />
                </div>
              )}
              <div className="border-b-2 pb-2 grid grid-cols-3 gap-2">
                {subjectandsyllabus.map((s) =>
                  s.subjectsandsyllabus.map((subsyll) => (
                    <CareerSubjectItem subject_name={subsyll.subjectname} />
                  ))
                )}
                {/* <CareerSubjectItem />
                <CareerSubjectItem />
                <CareerSubjectItem />
                <CareerSubjectItem />
                <CareerSubjectItem /> */}
              </div>
              <div className="text-2xl text-yellow-600 font-medium pb-2">
                Mock Tests
              </div>
              <div className="flex">
                <MockTestList />
              </div>
            </div>
            <div className="ml-16 border-l-2 px-2">
              {/* skill */}
              {isUploading && (
                <span className="text-lg text-primary block mt-4 mb-4 w-full">
                  {" "}
                  <LinearProgress color="success" />
                  <span className="text-base leading-relaxed italic font-semibold flex justify-center items-center">
                    Uploading...
                  </span>
                </span>
              )}
              <div className="flex space-x-4 items-center justify-between">
                <div className="text-2xl text-purple-800 font-medium pb-2">
                  Your skills
                </div>
                <div className="flex space-x-2 items-center">
                  <div className="font-serif text-lg text-gray-700">
                    Your Resume
                  </div>
                  <a href={userDetails?.resume?.secure_url} target="_">
                    <DocumentIcon className="h-7 w-7 cursor-pointer text-primary" />
                  </a>
                </div>

                <label className="cursor-pointer text-teal-700 mb-2 flex space-x-1 items-center border-2 border-teal-700 px-2 py-1">
                  <span
                    onClick={() => setshowResumeModal(true)}
                    className="text-xs font-bold lg:text-base"
                  >
                    Upload Resume
                  </span>
                  {showResumeModal ? (
                    <>
                      <div className="ease-in justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                Upload new resume{" "}
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setshowResumeModal(true)}
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
                                  Add Resume:{" "}
                                </div>
                                <input
                                  onChange={(e) =>
                                    setresumefile(e.target.files[0])
                                  }
                                  type="File"
                                  accept="application/pdf"
                                  className="px-2 rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                                />
                              </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setshowResumeModal(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={resumeUpload}
                              >
                                Upload
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                  <UploadIcon className="h-7 w-7" />
                </label>

                {/* {userDetails?.jobprofile ? (
                  <Link
                    to={`/dashboard/career/jobprofile/${userDetails?.jobprofile}`}
                    className="cursor-pointer text-teal-700 mb-2 flex space-x-1 items-center border-2 border-teal-700 px-2 py-1"
                  >
                    <BriefcaseIcon className="h-7 w-7" />
                    <div>Go To Job Profile</div>
                  </Link>
                ) : (
                  <div
                    onClick={jobprofileCreateHandler}
                    className="cursor-pointer text-teal-700 mb-2 flex space-x-1 items-center border-2 border-teal-700 px-2 py-1"
                  >
                    <BriefcaseIcon className="h-7 w-7" />
                    <div>Create Job Profile</div>
                  </div>
                )} */}
              </div>
              {showSkillAddModal ? (
                <>
                  <div className="ease-in justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">Add Skill </h3>
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
                              Add Skill:{" "}
                            </div>
                            <input
                              onChange={(e) => setSkill(e.target.value)}
                              type="text"
                              className="px-2 rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                            />
                          </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowSkillAddModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={addSkillHandler}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
              <div className="grid grid-cols-4 gap-2 border-b-2 pb-6">
                <div
                  onClick={() => setShowSkillAddModal(true)}
                  className="flex space-x-2 items-center cursor-pointer hover:shadow-md border-teal-800 border-2  p-3 rounded-md"
                >
                  <div className="font-semibold text-gray-600">Add Skill</div>
                  <PlusCircleIcon className="h-5 w-5 " />
                </div>
                {userDetails?.skills?.map((skill) => (
                  <SkillItem name={skill.skillname} isVerify={skill.verified} />
                ))}
              </div>
              <div>
                <div className="text-2xl text-yellow-600 font-medium pb-2">
                  Skill test
                </div>

                <SkillTests />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CareerDashboard);
