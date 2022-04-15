import {
  BriefcaseIcon,
  CogIcon,
  CreditCardIcon,
  DocumentIcon,
} from "@heroicons/react/solid";
import React from "react";
import PersonImage from "../../assets/person.png";

function JobSeekersListItem() {
  return (
    <div className="bg-white shadow-md max-w-lg p-2 rounded-lg cursor-pointer">
      {/* upper */}
      <div className="flex space-x-2 ">
        <img src={PersonImage} alt="" className="h-6 w-6" />
        <div className="text-lg text-teal-800 font-bold">User name</div>
      </div>
      {/* middle */}
      <div className="p-2">
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <CogIcon className="text-gray-500 h-5 w-5" />
            <div className="text-sm ">Experience :</div>
          </div>
          <div className="font-semibold tracking-wider">3 years +</div>
        </div>

        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <BriefcaseIcon className="text-green-500 h-5 w-5" />
            <div className="text-sm ">Skills&nbsp;:</div>
          </div>
          <div className="font-semibold tracking-wider truncate ">
            React,redux,node,express,mongo,graphql,apollo,neo4j
          </div>
        </div>

        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <CreditCardIcon className="text-yellow-500 h-5 w-5" />
            <div className="text-sm ">Expected Salary :</div>
          </div>
          <div className="font-semibold tracking-wider">30L </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-between px-2 items-center ">
        <div className="flex space-x-1 items-center">
          <DocumentIcon className="h-6 w-6 text-purple-700" />
          <div className="text-sm text-purple-700 font-semibold">Resume</div>
        </div>
        <div className="bg-teal-700 hover:bg-teal-800 px-3 py-1 rounded-full">
          <div className="text-white text-sm font-semibold">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(JobSeekersListItem);
