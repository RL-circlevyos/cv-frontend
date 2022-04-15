import { DocumentIcon } from "@heroicons/react/outline";
import React from "react";
import { ArrowLeftCircle } from "react-feather";
import { Link } from "react-router-dom";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import PersonImage from "../../../assets/person.png";

const NoteFiles = () => {
  return (
    <>
      <div className="items-start">
        <DocumentIcon className="h-14 w-14" />
        <div className="text-gray-500">Note name</div>
      </div>
    </>
  );
};

function SingleStudyMaterial() {
  return (
    <div className="fixed">
      <Navbar />
      <div className="flex w-screen h-screen">
        <CareerSidebar />
        <div className="h-screen w-screen  flex-grow px-60  py-5 bg-gray-50">
          <Link to="/career-guide/myresources/materials">
            <ArrowLeftCircle />
          </Link>
          <div className="py-5 flex space-x-2 items-center ">
            <img src={PersonImage} className="h-10 w-10 rounded-full" alt="" />
            <div>
              <div className="text-greyish-700 font-Mulish font-medium">
                User name
              </div>
              <div className="text-sm text-greyish-700 font-Mulish font-medium">
                Published on date
              </div>
            </div>
          </div>
          <div className="text-3xl font-semibold font-Mulish text-blue-700 pt-3">
            Note name
          </div>

          <div className="pt-5 space-x-2">
            <div className="text-lg text-gray-400 underline underline-offset-2 font-semibold">
              Description
            </div>

            <div className="text-justify font-Mulish text-xl  text-greyish-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="space-y-2 pt-5">
            <div className="text-lg text-gray-400 underline underline-offset-2 font-semibold">
              Notes
            </div>
            <div className="grid grid-cols-5 gap-3">
              <NoteFiles />
              <NoteFiles />
              <NoteFiles />
              <NoteFiles />
              <NoteFiles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleStudyMaterial);
