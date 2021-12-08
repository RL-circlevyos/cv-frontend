import React, { useState } from "react";
import { BookmarkIcon, EyeIcon, LightBulbIcon } from "@heroicons/react/solid";

const src =
  "https://images.unsplash.com/photo-1638208561774-6e02a8e17cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const Card = () => {
  const [bookmark, setBookmark] = useState(false);
  const clickBookmarkHandler = () => {
    setBookmark(!bookmark);
  };
  return (
    <div className="w-full space-x-2 flex items-start justify-center shadow-sm">
      <div className="w-2/5 h-32 bg-gray-50">
        <img src={src} alt="pic" className="h-full w-full object-contain " />
      </div>
      <div className="flex flex-col w-3/5 ">
        <div className="flex items-center pt-3 space-x-2">
          <img
            src="https://images.unsplash.com/photo-1637867165026-5725fe9fb052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="dp"
            className="w-5 h-5 rounded-full object-cover"
          />

          <span className="text-xs font-medium text-gray-900">User Name</span>
        </div>
        <span className=" text-gray-500">
          <span className="text-xxs font-medium hover:underline">
            Dr. Abdullah Abdullah's Presidential Election Campaign
          </span>
        </span>
        <span className="flex items-start space-x-4 pt-1">
          {" "}
          <span className="flex items-center space-x-1">
            <LightBulbIcon className="h-6 w-6 text-yellow-500" />
            <i className="text-gray-500 text-xxs font-bold">12k</i>
          </span>{" "}
          <span className="flex items-center space-x-1 pt-1">
            <EyeIcon className="h-4 w-4 text-gray-400" />
            <span className="text-xxs text-gray-500 font-bold italic">12k</span>
          </span>
          <span className="cursor-pointer " onClick={clickBookmarkHandler}>
            {bookmark ? (
              <BookmarkIcon className="h-4 w-4 text-blue-800 pt-1" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mt-1 text-blue-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            )}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
