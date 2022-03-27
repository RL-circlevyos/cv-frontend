import { AcademicCapIcon } from "@heroicons/react/solid";
import personImage from "../../../assets/person.png";
import React from "react";

function MentorListItem({ username, userprofile }) {
  return (
    <div
      className="bg-gray-200 flex items-start space-x-2 px-2 py-1 rounded-lg cursor-pointer
    "
    >
      <div className="flex space-x-2">
        <img
          src={userprofile ? userprofile : personImage}
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
        <div>
          <div className="text-sm font-semibold text-gray-700">{username}</div>
          <div className="flex space-x-4">
            <div className="text-xs  text-gray-700">Designation</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <AcademicCapIcon className="h-4 w-4 text-yellow-700 font-semibold" />
        <AcademicCapIcon className="h-4 w-4 text-yellow-700 font-semibold" />
        <AcademicCapIcon className="h-4 w-4 text-yellow-700 font-semibold" />
        <AcademicCapIcon className="h-4 w-4 text-yellow-700 font-semibold" />
        <AcademicCapIcon className="h-4 w-4 text-yellow-700 font-semibold" />
      </div>

      <div className="pl-5 flex">
        <div className="px-1.5 py-1.5 bg-green-600 rounded-full"></div>
      </div>
    </div>
  );
}

export default MentorListItem;
