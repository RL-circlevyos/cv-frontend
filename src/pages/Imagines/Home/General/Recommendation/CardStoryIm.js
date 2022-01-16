import React, { useState } from "react";
import { BookmarkIcon, LightBulbIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import dp from "../../../../../assets/person.png";
const src =
  "https://images.unsplash.com/photo-1638208561774-6e02a8e17cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const CardStoryIm = ({
  autor,
  avatar,
  id,
  title,
  introImage,
  username,
  appriciates,
}) => {
  const [bookmark, setBookmark] = useState(false);
  const clickBookmarkHandler = () => {
    setBookmark(!bookmark);
  };
  return (
    <div className="w-full space-x-2 flex items-start justify-center shadow px-2">
      <Link to={`/${id}`}>
        <div className="w-28 h-28 bg-gray-50">
          <img
            src={introImage ? introImage.secure_url : src}
            alt="pic"
            className="h-full w-full object-fill rounded-md "
          />
        </div>
      </Link>
      <div className="flex flex-col w-3/5 ">
        <div className="flex items-start pt-3 space-x-2">
          <div className="flex flex-1">
            <img
              src={avatar ? avatar : dp}
              alt="dp"
              className="w-6 h-6 rounded-full object-cover"
            />

            <span className="text-sm ml-2 font-medium text-gray-900 ">
              {username}
            </span>
          </div>
          <span className="cursor-pointer " onClick={clickBookmarkHandler}>
            {bookmark ? (
              <BookmarkIcon className="h-6 w-6 text-primary pt-1" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mt-1 text-primary"
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
        <Link to={`/${id}`}>
          <span className=" text-gray-500 w-3/5">
            <span className="text-xs font-medium hover:underline truncate">
              {title}
            </span>
          </span>
        </Link>
        <span className="flex items-start space-x-4 pt-1">
          {" "}
          <span className="flex items-center space-x-1">
            <LightBulbIcon className="h-6 w-6 text-yellow-500" />
            <i className="text-gray-500 text-xs font-bold">
              {appriciates.length}
            </i>
          </span>{" "}
          <span className="flex items-center space-x-1 text-tiny"></span>
        </span>
      </div>
    </div>
  );
};

export default React.memo(CardStoryIm);
