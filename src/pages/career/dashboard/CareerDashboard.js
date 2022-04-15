import { PlusCircleIcon } from "@heroicons/react/solid";
import React from "react";
import CareerNavbar from "../../../components/career/CareerNavbar";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import CareerSubjectItem from "./CareerSubjectItem";
import MockTestList from "./MockTestList";
import SkillItem from "./SkillItem";
import SkillTests from "./SkillTests";

function CareerDashboard() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="h-screen w-screen fixed">
      <Navbar />
      <CareerNavbar isCareerDashBoard={true} />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50">
          {/* Basic info of career */}
          <div className="flex">
            <div className="border-b-2 px-3 py-2 mx-3 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="text-lg font-semibold text-green-700">
                  Current Status&nbsp;:
                </div>
                <div>
                  You are now in{" "}
                  <span className="font-bold text-xl">School</span>{" "}
                </div>
              </div>

              <div className="flex space-x-2">
                <div className="text-lg font-semibold text-green-700">
                  Institute Name&nbsp;:
                </div>
                <div>Here is school name</div>
              </div>

              <div className="flex space-x-2">
                <div className="flex space-x-2">
                  <div className="text-lg font-semibold text-green-700">
                    Class/Sem:{" "}
                  </div>
                  <div className="font-bold text-xl">XII</div>
                </div>

                <div className="flex space-x-2">
                  <div className="text-lg font-semibold text-green-700">
                    Board/Affiliates:
                  </div>
                  <div className="font-bold text-xl">boardname</div>
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
                            className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                          >
                            <option value="school">School</option>
                            <option value="college">College</option>
                            <option value="job">In Job</option>
                          </select>
                        </div>
                        <div>
                          <div className="text-lg font-medium text-gray-400">
                            Institution Name:{" "}
                          </div>
                          <input
                            type="text"
                            className="px-2 rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                          />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-gray-400">
                            Current status:
                          </div>
                          <select
                            name="currentStatus"
                            id="currentStatus"
                            className="px-10 rounded-md bg-gray-50 cursor-pointer font-medium focus:outline-none"
                          >
                            <option value="school">School</option>
                            <option value="college">College</option>
                            <option value="job">In Job</option>
                          </select>
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
                          onClick={() => setShowModal(false)}
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

          {/* Subjects and skill */}
          <div className="flex mx-3 my-3 ">
            <div className="">
              {/* Subjects */}
              <div className="text-2xl text-purple-800 font-medium pb-2">
                Your Subjects And syllabus
              </div>
              <div className="border-b-2 pb-2 grid grid-cols-5 gap-5">
                <CareerSubjectItem />
                <CareerSubjectItem />
                <CareerSubjectItem />
                <CareerSubjectItem />
                <CareerSubjectItem />
                <CareerSubjectItem />
              </div>
              <div className="text-2xl text-yellow-600 font-medium pb-2">
                Mock Tests
              </div>
              <div className="">
                <MockTestList />
              </div>
            </div>
            <div className="ml-16 border-l-2 px-2">
              {/* skill */}
              <div className="flex space-x-4 items-center justify-between">
                <div className="text-2xl text-purple-800 font-medium pb-2">
                  Your skills
                </div>
                <div className="cursor-pointer text-teal-700 flex space-x-1 items-center border-2 border-teal-700 px-2 py-1">
                  <PlusCircleIcon className="h-7 w-7" />
                  <div>Add Skill</div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-5 border-b-2 pb-6">
                <SkillItem isVerify={true} />
                <SkillItem isVerify={true} />
                <SkillItem isVerify={true} />
                <SkillItem isVerify={true} />
                <SkillItem />
                <SkillItem />
                <SkillItem />
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
