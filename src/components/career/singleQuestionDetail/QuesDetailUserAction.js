import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PersonImage from "../../../assets/person.png";

function QuesDetailUserAction({ isRequestQDetail, isPublic }) {
  const { singlequestion } = useSelector((state) => state.qna);

  return (
    <div>
      <div className="flex grow w-screen justify-between ">
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
            <div className="text-sm font-semibold text-gray-700">
              {singlequestion?.question?.user?.name}
            </div>
            <div className="text-xs font-medium text-gray-500">
              {moment(singlequestion?.question?.createdAt).format(
                "MMMM Do YYYY, h:mm a"
              )}
            </div>
          </div>
          <img
            src={
              singlequestion?.question?.user?.photo
                ? singlequestion?.question?.user?.photo?.secure_url
                : PersonImage
            }
            alt=""
            className="h-9 w-9 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(QuesDetailUserAction);
