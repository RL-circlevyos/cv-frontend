import {
  BriefcaseIcon,
  CogIcon,
  CreditCardIcon,
  DocumentIcon,
} from "@heroicons/react/solid";
import React from "react";
import PersonImage from "../../../assets/person.png";

function MyjobListItem() {
  return (
    <div className="bg-white shadow-md max-w-lg p-2 rounded-lg cursor-pointer">
      {/* upper */}
      <div>
        <div className="text-lg text-teal-800 font-bold">Job title</div>
      </div>
      {/* middle */}
      <div className="grid gap-1 grid-cols-2 p-2">
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <CogIcon className="text-gray-500 h-5 w-5" />
            <div className="text-sm ">Experience :</div>
          </div>
          <div className="font-semibold tracking-wider">3 years +</div>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <CogIcon className="text-gray-500 h-5 w-5" />
            <div className="text-sm ">Requirements :</div>
          </div>
          <div className="font-semibold tracking-wider">React,Node</div>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <CreditCardIcon className="text-yellow-500 h-5 w-5" />
            <div className="text-sm ">Salary :</div>
          </div>
          <div className="font-semibold tracking-wider">30L </div>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <BriefcaseIcon className="text-green-500 h-5 w-5" />
            <div className="text-sm ">Job Type :</div>
          </div>
          <div className="font-semibold tracking-wider ">Remote</div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-between px-2 items-center ">
        <div className="flex space-x-2 items-center py-2">
          <img src={PersonImage} alt="" className="h-6 w-6" />
          <div>
            <div className="text-sm text-gray-600">Comapany name</div>
            <div className="text-sm text-gray-600">Location</div>
          </div>
        </div>
        <div className="flex space-x-1 items-center">
          <DocumentIcon className="h-6 w-6 text-purple-700" />
          <div className="text-sm text-purple-700 font-semibold">
            Resume count 12
          </div>
        </div>
        <div className="bg-teal-700 hover:bg-teal-800 px-3 py-1 rounded-full">
          <div className="text-white text-sm font-semibold">View</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MyjobListItem);
