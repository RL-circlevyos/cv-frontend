/**import React, { useCallback, useState } from "react";
import { BookmarkIcon, BookOpenIcon } from "@heroicons/react/solid";

const Header = () => {
  const [bookmark, setBookmark] = useState(false);
  const clickBookmarkHandler = useCallback(() => {
    setBookmark(!bookmark);
  }, [bookmark]);
  return (
    <div className=" flex justify-between items-start px-3">
      <div className="flex items-center space-x-2">
        <img
          src="https://images.unsplash.com/photo-1637867165026-5725fe9fb052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="dp"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold text-gray-900">User Name</span>
            <span className="text-sky-500 text-tiny cursor-pointer">
              Follow
            </span>
          </div>
          <div className="text-xs text-gray-500">Published 23 Nov, 2021.</div>
        </div>
      </div>

      <div className="flex items-start space-x-5 text-gray-400">
        <span className="flex items-center space-x-1 text-xs">
          <span className="cursor-pointer">
            <BookOpenIcon className="h-7 w-7 text-primary" />
          </span>
          <span className="flex text-gray-800 text-sm font-bold">
            {" "}
            <i>p-</i>
            <i>12</i>
            <i>/12</i>
          </span>
        </span>
        <span className="cursor-pointer" onClick={clickBookmarkHandler}>
          {bookmark ? (
            <BookmarkIcon className="h-6 w-6 text-primary" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
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
      </div>
    </div>
  );
};

export default React.memo(Header);*/
