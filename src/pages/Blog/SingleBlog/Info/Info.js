import { BookmarkIcon, LightBulbIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Tag from "./../../../../components/Tag";

const Info = () => {
  const [like, setLike] = useState(false);
  const clickLikeHandler = () => {
    setLike(!like);
  };

  const [bookmark, setBookmark] = useState(false);
  const clickBookmarkHandler = () => {
    setBookmark(!bookmark);
  };
  return (
    <div className="w-9/12 flex flex-col flex-wrap space-y-1 justify-center items-center font-Mulish px-4 py-2">
      <div className="flex items-center space-x-2">
        <span className="w-10 h-10 ">
          <img
            src="https://images.unsplash.com/photo-1638173973774-286a6a69d197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </span>
        <span className="text-base font-bold">Creator Name</span>
      </div>
      <div>
        <p className="text-sm pt-1">
          <b className="text-base text-gray-700">Bio -</b>&nbsp;Where does it
          come from? Contrary to popular belief, Lorem Ipsum is not simply
          random text.Where does it come from? Contrary to popular belief, Lorem
          Ipsum is not
        </p>
      </div>
      <div></div>{" "}
      <div className="flex items-start space-x-5 pr-3">
        <span className="flex items-center space-y-1 text-xs">
          <span className="cursor-pointer" onClick={clickLikeHandler}>
            {like ? (
              <LightBulbIcon className="h-7 w-7 text-yellow-500" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-yellow-600"
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
          <span className="cursor-pointer" onClick={clickBookmarkHandler}>
            {bookmark ? (
              <BookmarkIcon className="h-7 w-7 text-blue-800" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-800"
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
      <div className="flex items-center flex-wrap pt-2 space-y-2 space-x-2">
        <Tag tagname="tag 1" />
        <Tag tagname="tag 1" />
        <Tag tagname="tag 1" />
        <Tag tagname="tag 1" />
        <Tag tagname="tag 1" />
        <Tag tagname="tag 1" />
      </div>
    </div>
  );
};

export default Info;
