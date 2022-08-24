import {
  BriefcaseIcon,
  CogIcon,
  CreditCardIcon,
  DocumentAddIcon,
} from "@heroicons/react/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PersonImage from "../../../assets/person.png";
import { jobApplyAction } from "../../../store/apps/job/job-action";

function WorkItem({
  jobtitle,
  experience,
  requirements,
  salary,
  jobtype,
  username,
  location,
  userprofileimg,
  id,
}) {
  const { userDetails, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Link
      to={`/career-guide/work/${id}`}
      className="bg-white shadow-md max-w-full p-2 rounded-lg cursor-pointer"
    >
      {/* upper */}
      <div>
        <div className="text-lg text-teal-800 font-bold">{jobtitle}</div>
      </div>
      {/* middle */}
      <div className="grid gap-1 grid-cols-2 p-2">
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <CogIcon className="text-gray-500 h-5 w-5" />
            <div className="text-sm ">Experience :</div>
          </div>
          <div className="font-semibold tracking-wider">{experience}</div>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <CogIcon className="text-gray-500 h-5 w-5" />
            <div className="text-sm ">Requirements :</div>
          </div>
          <div className="font-semibold tracking-wider">{requirements}</div>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <CreditCardIcon className="text-yellow-500 h-5 w-5" />
            <div className="text-sm ">Salary :</div>
          </div>
          <div className="font-semibold tracking-wider">{salary}</div>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center">
            <BriefcaseIcon className="text-green-500 h-5 w-5" />
            <div className="text-sm ">Job Type :</div>
          </div>
          <div className="font-semibold tracking-wider ">{jobtype}</div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-between px-2 items-center ">
        <div className="flex space-x-2 items-center py-2">
          <img
            src={userprofileimg ? userprofileimg : PersonImage}
            alt=""
            className="h-6 w-6 rounded-full"
          />
          <div>
            <div className="text-sm text-gray-600 ">{username}</div>
            <div className="text-sm text-gray-600">{location}</div>
          </div>
        </div>
        {userDetails.jobProviderStatus ? (
          ""
        ) : (
          <div className="flex space-x-1 items-center">
            <DocumentAddIcon className="h-6 w-6 text-purple-700" />
            <div className="text-sm text-purple-700 font-semibold">
              Resume Match
            </div>
          </div>
        )}
        {userDetails.jobProviderStatus ? (
          ""
        ) : (
          <div className="bg-teal-700 hover:bg-teal-800 px-3 py-1 rounded-full">
            <div className="text-white text-sm font-semibold">View</div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default React.memo(WorkItem);
