import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import PersonImage from "../../../assets/person.png";

function QuesDetailUserAction({ isRequestQDetail, isPublic }) {
  return (
    <div>
      <div className="flex justify-between">
        {isPublic && (
          <Link to="/career-guide/qna">
            <ArrowCircleLeftIcon className="h-9 w-9 text-gray-600 hover:text-gray-500 cursor-pointer" />
          </Link>
        )}
        {isRequestQDetail && (
          <Link to="/career-guide/qna/request">
            <ArrowCircleLeftIcon className="h-9 w-9 text-gray-600 hover:text-gray-500 cursor-pointer" />
          </Link>
        )}

        <div className="flex items-center text-right space-x-3">
          <div>
            <div className="text-sm font-semibold text-gray-700">User Name</div>
            <div className="text-xs font-medium text-gray-500">12.01.2022</div>
          </div>
          <img src={PersonImage} alt="" className="h-9 w-9" />
        </div>
      </div>
    </div>
  );
}

export default React.memo(QuesDetailUserAction);
