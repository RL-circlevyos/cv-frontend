import React from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";
import PersonImage from "../../assets/person.png";
import { Link } from "react-router-dom";
import moment from "moment";

function CareerQuestionListItem({
  profileImageQAthr,
  username,
  questionTitle,
  createdat,
  likes,
  questionid,
}) {
  return (
    <div>
      <div className="bg-white max-w-5xl py-2 rounded-lg shadow-md mx-auto justify-center">
        {/* Top container */}
        <div className="flex">
          {/* top left */}
          <div className="flex items-center flex-grow ">
            <img
              className="relative w-9 h-9 mx-2  rounded-full "
              src={profileImageQAthr ? profileImageQAthr : PersonImage}
              alt=""
            />

            <div>
              <div className="text-sm text-gray-700 font-semibold">
                {username}
              </div>
              <div className="text-sm text-gray-500">
                {moment(createdat).format("MMMM Do YYYY, h:mm a")}
              </div>
            </div>
          </div>

          {/* top right */}
          <div className="flex space-x-8 pr-10 ">
            <div className="flex items-center space-x-1 cursor-pointer">
              <ThumbUpIcon className="h-6 w-6 text-green-500" />
              <div className="text-sm font-semibold  text-center">
                {likes.length}
              </div>
            </div>
            {/* <div className="flex items-center space-x-1 cursor-pointer ">
              <ThumbDownIcon className="h-6 w-6 text-red-700" />
              <div className="text-sm font-semibold  text-center">20</div>
            </div> */}
          </div>
        </div>

        <Link to={`/career-guide/qna/${questionid}`}>
          {/* middle container */}
          <div className="pt-5  ">
            <div className="border-b-2 mx-3 text-sm text-gray-400">
              Question
            </div>
            <div className="px-3 font-serif tracking-wide text-lg font-semibold text-grey-800 ">
              {questionTitle}
            </div>
          </div>
          {/* bottom container */}
          <div className="  my-2 relative ">
            <div className="border-t-2 mx-3 text-sm text-gray-400">Answer</div>
            <div className="flex my-2">
              <img
                className="relative w-5 h-5 ml-2  rounded-full "
                src={PersonImage}
                alt=""
              />

              <div className="px-3 font-serif tracking-wide text-sm truncate text-grey-800 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(CareerQuestionListItem);
