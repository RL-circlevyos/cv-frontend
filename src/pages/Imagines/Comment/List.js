import { PaperAirplaneIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

import Comment from "./Comment";
import Button from "@mui/material/Button";

const CommentList = () => {
  const [newCommentInput, setNewCommentInput] = useState();

  function postComment(e) {
    e.preventDefault();

    console.log(newCommentInput, "calling COMMENT");
  }

  return (
    <div>
      <form
        className="w-full md:w-11/12 mt-3 rounded-3xl font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-200 border 
        border-gray-900 dark:border-primary flex items-center px-3 py-1"
      >
        <input
          onChange={(e) => setNewCommentInput(e.target.value)}
          type="text"
          placeholder="leave a comment"
          className="w-full text-sm px-3 focus:outline-none  dark:bg-gray-800"
        />
        <Button variant="text" color="primary" onClick={postComment}>
          <PaperAirplaneIcon className="h-5 w-5 transform rotate-45" />
        </Button>
      </form>
      <div className="mt-2 space-y-3 mb-5">
        <div className="text-center text-gray-700 font-bold">
          No Comments till now
        </div>

        <Comment username="helo" commentText="helo" date="12" key="1" />
      </div>
    </div>
  );
};

export default React.memo(CommentList);
