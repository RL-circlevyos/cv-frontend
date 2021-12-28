import React from "react";
import moment from "moment";

const Comment = ({ username, commentText, date }) => {
  return (
    <div className="flex flex-col items-start space-x-2 pb-2 px-4 py-1 shadow-sm">
      <div className="flex-wrap">
        <div className="flex items-start space-x-2">
          <img
            src="https://images.unsplash.com/photo-1637867165026-5725fe9fb052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="dp"
            className="w-6 h-6 rounded-full object-cover"
          />{" "}
          <div className="flex flex-col">
            <span className="text-tiny font-semibold text-gray-900">
              {username}
            </span>

            <div className="text-xxs text-gray-500">Posted {"date_add"}.</div>
          </div>
        </div>
        <span className="text-sky-500 text-tiny cursor-pointer">
          {" "}
          {commentText}
        </span>
      </div>
    </div>
  );
};

export default React.memo(Comment);
