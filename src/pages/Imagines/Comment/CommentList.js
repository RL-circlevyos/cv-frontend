import React from "react";
import Comment from "./Comment";

const CommentList = () => {
  return (
    <div>
      <div className="mt-1 space-y-1 w-full">
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default React.memo(CommentList);
