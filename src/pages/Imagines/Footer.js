import {
  BookOpenIcon,
  LightBulbIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";

const Footer = () => {
  const [like, setLike] = useState(false);
  const clickLikeHandler = () => {
    setLike(!like);
  };

  return (
    <div className="flex items-start justify-evenly text-gray-900">
      <span className="flex items-center space-x-1 text-xs">
        <span className="cursor-pointer" onClick={clickLikeHandler}>
          {like ? (
            <LightBulbIcon className="h-7 w-7 text-yellow-500" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          )}
        </span>
        <i>12k</i>
      </span>
      <span className="block text-xs">
        <span className="cursor-pointer">
          <BookOpenIcon className="h-7 w-7 " />
        </span>
        <i>part 12</i>
      </span>
      <div
        className="w-4/6 rounded-3xl font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-200 border 
        border-gray-900 dark:border-primary flex items-center px-3 py-1"
      >
        <input
          type="text"
          placeholder="leave a comment"
          className="w-full text-sm px-3 focus:outline-none  dark:bg-gray-800"
        />
        <PaperAirplaneIcon className="h-5 w-5 transform rotate-45" />
      </div>
    </div>
  );
};

export default Footer;
