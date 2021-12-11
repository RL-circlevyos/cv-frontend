import React from "react";
import "./CommentBox.css";

import Comment from "./Comment";
import { XIcon } from "@heroicons/react/solid";
import Scrollbars from "react-custom-scrollbars-2";

const CommentBox = ({ closeCommentBox, showBox }) => {
  return (
    <>
      {showBox && (
        <div className="CommentBox shadow-md font-Mulish">
          <div className="CommentBox_header">
            <span className="text-primary text-lg font-bold">All Comments</span>
            <XIcon
              className="h-7 w-7 cursor-pointer"
              onClick={closeCommentBox}
            />
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
              </div>{" "}
            </div>
          </Scrollbars>
        </div>
      )}
    </>
  );
};

export default CommentBox;
