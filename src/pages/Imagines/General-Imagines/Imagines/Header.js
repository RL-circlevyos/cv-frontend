import React, { useCallback, useState } from "react";
import { BookmarkIcon, BookOpenIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import moment from "moment";

const Header = () => {
  const [bookmark, setBookmark] = useState(false);
  const singleImagine = useSelector((state) => state.imagine.singleImagine);
  const clickBookmarkHandler = useCallback(() => {
    setBookmark(!bookmark);
  }, [bookmark]);

  console.log(singleImagine.singleImagine);
  return (
    <div className=" flex justify-between items-start px-3">
      <div className="flex items-center space-x-2">
        <img
          src={singleImagine?.singleImagine?.photo}
          alt="dp"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold text-gray-900">
              {singleImagine?.singleImagine?.name}
            </span>
            <span className="text-sky-500 text-tiny cursor-pointer">
              Follow
            </span>
          </div>
          <div className="text-xs text-gray-500">
            {moment(singleImagine?.singleImagine?.createdAt).format(
              "dddd, MMMM Do YYYY, h:mm a"
            )}
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-5 text-gray-400">
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
        <span className=""></span>
      </div>
    </div>
  );
};

export default React.memo(Header);
