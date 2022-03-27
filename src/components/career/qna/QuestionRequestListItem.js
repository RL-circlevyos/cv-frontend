import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import PersonImage from "../../../assets/person.png";

function QuestionRequestListItem({
  username,
  userprofile,
  createdAt,
  title,
  questionid,
}) {
  return (
    <div>
      <div className="bg-gray-50 max-w-5xl py-2 w-full flex-grow rounded-lg shadow-md mx-auto justify-center">
        {/* Top container */}
        <div className="flex">
          {/* top left */}
          <div className="flex items-center flex-grow ">
            <img
              className="relative w-9 h-9 mx-2  rounded-full "
              src={userprofile ? userprofile : PersonImage}
              alt=""
            />

            <div>
              <div className="text-sm text-gray-700 font-semibold">
                {username}
              </div>
              <div className="text-sm text-gray-500">
                {moment(createdAt).format("MMMM Do YYYY, h:mm a")}
              </div>
            </div>
          </div>
        </div>

        <Link to={`/career-guide/qna/request/${questionid}`}>
          {/* middle container */}
          <div className="pt-5  ">
            <div className="border-b-2 mx-3 text-sm text-gray-400">
              Question
            </div>
            <div className="px-3 font-serif tracking-wide text-lg font-semibold text-grey-800 ">
              {title}
            </div>
          </div>
          {/* bottom container */}
          <div className="  my-2 justify-end  ">
            <div className="flex px-2 pt-5 justify-end ">
              <div className="bg-teal-600 hover:bg-teal-700 px-2 py-1 rounded-lg text-white font-semibold">
                Accept
              </div>
              <div className="px-2 py-1 rounded-lg text-teal-700 font-semibold">
                Accepted
              </div>
              <div className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded-lg text-white font-semibold">
                Reject
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(QuestionRequestListItem);
