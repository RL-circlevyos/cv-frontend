import {
  AnnotationIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  LightBulbIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";

const Footer = ({ openCommentBox }) => {
  const [like, setLike] = useState(false);
  const clickLikeHandler = () => {
    setLike(!like);
  };

  const [title, setTitle] = useState("");
  const limit = 250;
  const setTitleContent = useCallback(
    (text) => {
      setTitle(text.slice(0, 250));
    },
    [setTitle]
  );
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const post = {
        title,
      };

      console.log(post);
      setTitle("");
    },
    [title]
  );

  return (
    <div className="flex flex-wrap space-y-5 lg:space-y-0 lg:flex-nowrap items-start justify-evenly space-x-3 text-gray-900 font-bold font-Mulish">
      <div className="flex w-full items-start justify-evenly space-x-3 text-gray-900 font-bold">
        <span className="flex justify-center items-center flex-col text-tiny text-gray-300">
          {" "}
          <span className="flex items-center space-x-1 text-xs">
            <span className="cursor-pointer" onClick={clickLikeHandler}>
              {like ? (
                <LightBulbIcon className="h-7 w-7 md:h-8 md:w-8 text-yellow-500" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-8 md:w-8 h-7 w-7 text-gray-500"
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
            <i className="text-xs lg:text-sm text-primary">12k</i>
          </span>
          APPRECIATE
        </span>
        <span className="flex justify-center items-center flex-col text-tiny text-gray-300 mt-1">
          <span className="pt-1">
            <ShareIcon className="h-6 w-6 cursor-pointer text-gray-600 pb-1 ml-2" />
            SHARE
          </span>
        </span>
        <span className="flex justify-center items-center flex-col text-tiny text-gray-300 mt-1">
          <span className="flex items-center">
            <EyeIcon className="h-5 w-5 md:h-6 md:w-5 text-gray-500" />
            <span className="text-xs lg:text-sm italic ml-1 text-primary">
              12k
            </span>
          </span>
          VIEWS
        </span>
        <span className="flex justify-center items-center flex-col text-tiny text-gray-300 mt-1">
          <span className="flex items-center space-x-1 text-xs ">
            <span className="cursor-pointer " onClick={openCommentBox}>
              <AnnotationIcon className="h-6 w-6 text-gray-500" />
            </span>
            <span className="text-xs lg:text-sm italic ml-1 text-primary">
              <i>1k</i>
            </span>
          </span>
          COMMENTS
        </span>
      </div>
      {/* <form onSubmit={onSubmit} className="w-full md:w-1/2 block">
        <div>
          <span className="w-full md:w-1/2">
            <span
              className="w-full   font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-200 border-b-2
        border-gray-300 dark:border-primary flex items-center px-3 py-1"
            >
              <input
                type="text"
                required
                placeholder="Title of Imagine"
                className="w-full text-sm px-3 focus:outline-none  dark:bg-gray-800"
                value={title}
                onChange={(e) => setTitleContent(e.target.value)}
              />
              <PaperAirplaneIcon className="h-5 w-5 transform rotate-45" />
            </span>
            <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
              {title.length}/{limit}
            </p>
          </span>
        </div>
      </form> */}
    </div>
  );
};

export default React.memo(Footer);
