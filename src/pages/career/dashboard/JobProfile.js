import React, { useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import PersonImage from "../../../assets/person.png";
import { Facebook, GitHub, Linkedin, Twitter } from "react-feather";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  DocumentIcon,
  LinkIcon,
  MailIcon,
  PhoneIcon,
  PencilIcon,
} from "@heroicons/react/solid";
import SkillItem from "./SkillItem";
import { useSelector } from "react-redux";

function JobProfile() {
  const [personalInfoModal, setpersonalInfoModal] = useState(false);
  const [skillModal, setSkillModal] = useState(false);
  const [certificateModal, setCertificateModal] = useState(false);
  const [socalContactModal, setsocalContactModal] = useState(false);
  const [workExpModal, setWorkExpModal] = useState(false);
  const [educationModal, setEducationModal] = useState(false);
  const [otherActivityModal, setotherActivityModal] = useState(false);
  const { userDetails } = useSelector((state) => state.auth);

  const personalInfoRef = useRef();

  const submitPersonalInfo = (e) => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/personalinfo`);
  };

  return (
    <div className="fixed">
      <Navbar />
      <div className="bg-gray-50 h-screen  overflow-y-auto no-scrollbar">
        <div className="mx-10 py-4 font-Mulish ">
          {/* header */}
          <div className="flex justify-between  ">
            <div className="flex space-x-5 ">
              <img
                src={PersonImage}
                alt=""
                className="rounded-full h-32 w-32"
              />
              <div>
                <div className="text-3xl font-semibold ">
                  {userDetails?.name}
                </div>
                <div className="text-xl ">Desination</div>
                <div className=" ">Location</div>
              </div>
            </div>
            <div className="mr-20">
              <div>
                <div className="text-2xl font-semibold text-gray-500 border-b-2 mb-2">
                  Social contact
                </div>
                <div className="flex space-x-3">
                  <div className="cursor-pointer">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div className="cursor-pointer">
                    <GitHub className="h-5 w-5" />
                  </div>
                  <div className="cursor-pointer">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div className="cursor-pointer">
                    <Twitter className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex space-x-2">
                  <MailIcon className="h-7 w-7" />
                  <div className="text-xl">{userDetails?.email}</div>
                </div>
                <div className="flex space-x-2">
                  <PhoneIcon className="h-7 w-7" />
                  <div className="text-xl">11111011</div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-20 overflow-y-auto">
            <div className="">
              {/* left side */}
              <div className="">
                <div className="flex space-x-2 items-center">
                  <div className="text-2xl font-semibold text-gray-500 font-Mulish">
                    Personal Info
                  </div>
                  <PencilIcon
                    onClick={() => setpersonalInfoModal(true)}
                    className="h-7 w-7 text-greyish-600 cursor-pointer"
                  />
                  {personalInfoModal ? (
                    <>
                      <div className="ease-in justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                Write Your Personal info{" "}
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setpersonalInfoModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto space-y-2">
                              <div>
                                <textarea
                                  type="text"
                                  ref={personalInfoRef}
                                  className="px-2 w-full h-72  rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                                />
                              </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setpersonalInfoModal(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setpersonalInfoModal(false)}
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
                </div>
                <div className="text-justify font-Mulish">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="flex space-x-2 items-center">
                  <div className="text-2xl font-semibold text-gray-500 font-Mulish pt-4">
                    Skills
                  </div>
                  <PencilIcon
                    onClick={() => setSkillModal(true)}
                    className="h-7 w-7 text-greyish-600 cursor-pointer"
                  />
                  {skillModal ? (
                    <>
                      <div className="ease-in transition transform justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                Add Your skills{" "}
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setSkillModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto space-y-2">
                              <div>
                                <input
                                  type="text"
                                  className="px-2  rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                                />
                              </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setSkillModal(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setSkillModal(false)}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 w-fill fixed inset-0 z-40  bg-black"></div>
                    </>
                  ) : null}
                </div>
                <div className="grid grid-cols-6 gap-1">
                  <SkillItem isVerify={true} />
                  <SkillItem isVerify={true} />
                  <SkillItem isVerify={true} />
                  <SkillItem isVerify={true} />
                  <SkillItem isVerify={true} />
                  <SkillItem isVerify={true} />
                  <SkillItem isVerify={true} />
                  <SkillItem isVerify={true} />
                  <SkillItem isVerify={true} />
                </div>

                <div className="flex space-x-2 items-center">
                  <div className="text-2xl font-semibold text-gray-500 font-Mulish pt-4">
                    Certificates
                  </div>
                  <PencilIcon
                    onClick={() => setCertificateModal(true)}
                    className="h-7 w-7 text-greyish-600 cursor-pointer"
                  />
                  {certificateModal ? (
                    <>
                      <div className="ease-in transition transform justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                Add Your certificate{" "}
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setSkillModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto space-y-5">
                              <div>
                                <div>Certificate name</div>
                                <input
                                  type="text"
                                  className="px-2 w-full rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                                />
                              </div>
                              <input type="file" accept="application/pdf" />
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setCertificateModal(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setCertificateModal(false)}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 w-fill fixed inset-0 z-40  bg-black"></div>
                    </>
                  ) : null}
                </div>
                <div className="space-y-2 ">
                  <CertificateItem />
                  <CertificateItem />
                  <CertificateItem />
                  <CertificateItem />
                  <CertificateItem />
                  <CertificateItem />
                </div>
              </div>
            </div>
            <div className="">
              {/* right side */}

              <div className="text-2xl flex space-x-1 items-center  text-left font-semibold text-teal-600 font-Mulish pt-4">
                <BriefcaseIcon className="h-5 w-5" />
                <div>Work Experience</div>
                <PencilIcon
                  onClick={() => setWorkExpModal(true)}
                  className="h-7 w-7 text-greyish-600 cursor-pointer"
                />
              </div>
              {workExpModal ? (
                <>
                  <div className="ease-in transition transform justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Add work experience{" "}
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setSkillModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto space-y-5">
                          <div>
                            <div className="text-lg font-semibold text-gray-700">
                              Work name
                            </div>
                            <input
                              type="text"
                              className="px-2 w-full rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                            />
                          </div>
                          <div className="flex space-x-2">
                            <div>
                              <div className="text-lg font-semibold text-gray-700">
                                Start Date
                              </div>
                              <input type="date" id="date" name="start date" />
                            </div>
                            <div>
                              <div className="text-lg font-semibold text-gray-700">
                                End Date
                              </div>
                              <input type="date" id="date" name="start date" />
                            </div>
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-gray-700">
                              Add work link
                            </div>
                            <input
                              type="text"
                              className="px-2 w-full rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                            />
                          </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setWorkExpModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setWorkExpModal(false)}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 w-fill fixed inset-0 z-40  bg-black"></div>
                </>
              ) : null}
              <div className="text-justify font-Mulish space-y-2 h-52 overflow-y-auto">
                <WorkExperienceItem />
                <WorkExperienceItem />
                <WorkExperienceItem />
                <WorkExperienceItem />
                <WorkExperienceItem />
              </div>

              <div className="text-2xl text-left flex space-x-1 items-center font-semibold text-teal-600 font-Mulish pt-4">
                <AcademicCapIcon className="h-5 w-5" />
                <div>Education</div>
                <PencilIcon
                  onClick={() => setEducationModal(true)}
                  className="h-7 w-7 text-greyish-600 cursor-pointer"
                />
              </div>
              {educationModal ? (
                <>
                  <div className="ease-in transition transform justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Add Education{" "}
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setEducationModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto space-y-5">
                          <div>
                            <div className="text-lg font-semibold text-gray-700">
                              Institute name
                            </div>
                            <input
                              type="text"
                              className="px-2 w-full rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                            />
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-gray-700">
                              Degree
                            </div>
                            <input
                              type="text"
                              className="px-2 w-full rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                            />
                          </div>
                          <div className="flex space-x-2">
                            <div>
                              <div className="text-lg font-semibold text-gray-700">
                                Start Date
                              </div>
                              <input type="date" id="date" name="start date" />
                            </div>
                            <div>
                              <div className="text-lg font-semibold text-gray-700">
                                End Date
                              </div>
                              <input type="date" id="date" name="start date" />
                            </div>
                          </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setEducationModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setEducationModal(false)}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 w-fill fixed inset-0 z-40  bg-black"></div>
                </>
              ) : null}
              <div className="h-52 overflow-y-auto space-y-2">
                <EducationItem />
                <EducationItem />
                <EducationItem />
                <EducationItem />
                <EducationItem />
              </div>
              <div className="text-2xl text-left flex space-x-1 items-center font-semibold text-teal-600 font-Mulish pt-4">
                <AcademicCapIcon className="h-5 w-5" />
                <div>Other activities</div>
                <PencilIcon
                  onClick={() => setotherActivityModal(true)}
                  className="h-7 w-7 text-greyish-600 cursor-pointer"
                />
              </div>
              {otherActivityModal ? (
                <>
                  <div className="ease-in transition transform justify-center bg-gray-500 bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Add Activity{" "}
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setotherActivityModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto space-y-5">
                          <div>
                            <div className="text-lg font-semibold text-gray-700">
                              Activity name
                            </div>
                            <input
                              type="text"
                              className="px-2 w-full rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                            />
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-gray-700">
                              Place
                            </div>
                            <input
                              type="text"
                              className="px-2 w-full rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                            />
                          </div>

                          <div>
                            <div className="text-lg font-semibold text-gray-700">
                              Add work link
                            </div>
                            <input
                              type="file"
                              accept="application/pdf"
                              className="px-2 w-full rounded-md bg-gray-100 border-b-2 font-medium focus:outline-none"
                            />
                          </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setotherActivityModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setotherActivityModal(false)}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 w-fill fixed inset-0 z-40  bg-black"></div>
                </>
              ) : null}
              <div className="h-52 overflow-y-auto space-y-2">
                <OtherActivityItem />
                <OtherActivityItem />
                <OtherActivityItem />
                <OtherActivityItem />
                <OtherActivityItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(JobProfile);

export const CertificateItem = () => {
  return (
    <div className="flex justify-between mx-5 bg-white px-2 py-2 rounded-md shadow-sm hover:shadow-md cursor-pointer">
      <div>Course_name</div>
      <DocumentIcon className="h-5 w-5" />
    </div>
  );
};

export const WorkExperienceItem = () => {
  return (
    <div className="bg-white rounded-md flex items-center justify-between shadow-sm hover:shadow-md cursor-pointer px-2 py-1">
      <div>
        <div className="text-xl text-gray-700">Project name</div>
        <div className="text-lg font-semibold text-gray-600">Company name</div>
      </div>
      <div className="flex space-x-2">
        <div>From 12.02.2020</div>
        <div>to 12.02.2022</div>
      </div>
      <div>
        <div>Attachment</div>
        <LinkIcon className="h-5 w-5" />
      </div>
    </div>
  );
};

export const EducationItem = () => {
  return (
    <div className="bg-white rounded-md flex items-center justify-between shadow-sm hover:shadow-md cursor-pointer px-2 py-1">
      <div>
        <div className="text-xl text-gray-700">Intitute name</div>
        <div className="text-lg font-semibold text-gray-600"> Degree</div>
      </div>
      <div className="flex space-x-2">
        <div>From 12.02.2020</div>
        <div>to 12.02.2022</div>
      </div>
    </div>
  );
};

export const OtherActivityItem = () => {
  return (
    <>
      <div className="bg-white rounded-md flex items-center justify-between shadow-sm hover:shadow-md cursor-pointer px-2 py-1">
        <div>
          <div className="text-xl text-gray-700">Acitivity name</div>
          <div className="text-lg font-semibold text-gray-600"> Place</div>
        </div>
        <div className="flex space-x-2">
          <DocumentIcon className="h-5 w-5" />
        </div>
      </div>
    </>
  );
};
