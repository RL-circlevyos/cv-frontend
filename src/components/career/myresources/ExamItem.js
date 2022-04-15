import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import moment from "moment";
import React from "react";
import PersonImage from "../../../assets/person.png";

function ExamItem({
  examname,
  createdAt,
  examdetails,
  applicationDateFrom,
  applicationDateto,
  examDate,
  username,
  userprofile,
}) {
  return (
    <div className="bg-white   p-3 rounded-lg shadow-md cursor-pointer">
      {/* header */}
      <div className="flex justify-between items-start">
        <div className="text-xl text-blue-600 font-bold">{examname}</div>
        <div className="text-gray-600 text-xs font-semibold">
          Published on {moment(createdAt).format("MMMM Do YYYY")}
        </div>
      </div>
      {/* middle */}
      <div>
        <div className="w-lg truncate text-sm text-gray-600">{examdetails}</div>
        <div className="flex py-2 items-center space-x-2">
          <div className="text-base font-semibold text-teal-600">
            Application Date :
          </div>
          <div className="text-sm font-bold tracking-wider text-gray-500">
            {moment(applicationDateFrom).format("MMMM Do YYYY")}
          </div>
          <ArrowNarrowRightIcon className="h-5 w-5 text-green-700" />
          <div className="text-sm font-bold tracking-wider text-gray-500">
            {moment(applicationDateto).format("MMMM Do YYYY")}
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex ">
        <div className="flex space-x-2">
          <div className="text-teal-600 font-bold">Exam Date :</div>
          <div className="text-base font-bold tracking-wider text-gray-500">
            {moment(examDate).format("MMMM Do YYYY")}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <div>{username}</div>
        <img
          src={userprofile ? userprofile : PersonImage}
          alt=""
          className="h-8 w-8 rounded-full"
        />
      </div>
    </div>
  );
}

export default React.memo(ExamItem);
