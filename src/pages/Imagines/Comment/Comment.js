import React from "react";
import moment from "moment";
import dp from "../../../assets/person.png";

const Comment = ({ username, commentText, avatar, date }) => {
  return (
    <div className="flex flex-col items-start space-x-2 pb-2 px-4 py-1 shadow border border-gray-50 font-Mulish mb-2">
      <div className="flex-wrap">
        <div className="flex items-start space-x-2">
          <img
            src={avatar ? avatar : dp}
            alt="dp"
            className="w-6 h-6 rounded-full object-cover"
          />{" "}
          <div className="flex flex-col">
            <span className="text-tiny font-semibold text-gray-900">
              {username}
            </span>

            <div className="text-xxs text-gray-500">
              {" "}
              {moment(date).format("dddd, MMMM Do YYYY, h:mm a")}
            </div>
          </div>
        </div>
        <span className="text-gray-800 text-tiny lg:text-base cursor-pointer">
          {" "}
          {commentText}
        </span>
      </div>
    </div>
  );
};

export default React.memo(Comment);
