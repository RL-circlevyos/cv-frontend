import { PaperAirplaneIcon } from "@heroicons/react/solid";
import React from "react";
import Comment from "./Comment";

const CommentList = () => {
  return (
    <div>
      <div
        className="w-full md:w-11/12 mt-3 rounded-3xl font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-200 border 
        border-gray-900 dark:border-primary flex items-center px-3 py-1"
      >
        <input
          type="text"
          placeholder="leave a comment"
          className="w-full text-sm px-3 focus:outline-none  dark:bg-gray-800"
        />
        <PaperAirplaneIcon className="h-5 w-5 transform rotate-45" />
      </div>
      <div className="mt-2 space-y-1">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default CommentList;
