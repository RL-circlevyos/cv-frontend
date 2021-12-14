import React, { useCallback, useState } from "react";
import "./CommentBox.css";

import Comment from "./Comment";
import { PaperAirplaneIcon, XCircleIcon } from "@heroicons/react/solid";
import Scrollbars from "react-custom-scrollbars-2";

const CommentBox = ({ closeCommentBox, showBox }) => {
  const [comments, setComments] = useState("");
  const limit = 150;
  const setCommentsContent = useCallback(
    (text) => {
      setComments(text.slice(0, 150));
    },
    [setComments]
  );
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const post = {
        comments: comments,
      };

      console.log(post);
      setComments("");
    },
    [comments]
  );

  return (
    <>
      {showBox && (
        <div className="CommentBox shadow-md font-Mulish">
          <span className="flex justify-between items-center px-4 py-1">
            <XCircleIcon
              className="h-8 w-8 text-pink-800 cursor-pointer"
              onClick={closeCommentBox}
            />{" "}
            <div></div>
          </span>
          <form onSubmit={onSubmit} className="w-full block px-6">
            <div>
              <span className="w-full">
                <span
                  className="w-full   font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-200 border-b-2
        border-gray-300 dark:border-primary flex items-center px-3 py-1"
                >
                  <textarea
                    rows={2}
                    type="text"
                    required
                    placeholder="Write your comment"
                    className="w-full text-sm px-3 focus:outline-none  dark:bg-gray-800"
                    value={comments}
                    onChange={(e) => setCommentsContent(e.target.value)}
                  />
                  <button type="submit">
                    {" "}
                    <PaperAirplaneIcon className="h-6 w-6 text-primary transform rotate-45" />
                  </button>
                </span>
                <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
                  {comments.length}/{limit}
                </p>
              </span>
            </div>
          </form>
          <div className="CommentBox_header">
            <span className="text-primary text-lg font-bold">All Comments</span>
          </div>
          <Scrollbars
            autoHide
            thumbSize={1}
            style={{ width: "100%", height: "60vh" }}
          >
            <div>
              <div>
                {" "}
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>{" "}
            </div>
          </Scrollbars>
        </div>
      )}
    </>
  );
};

export default React.memo(CommentBox);
