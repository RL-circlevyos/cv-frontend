import { PaperAirplaneIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { commentCreateAction } from "../../../store/apps/imagines/imagine-action";

const CommentList = () => {
  const [newCommentInput, setNewCommentInput] = useState();
  const dispatch = useDispatch();
  const imagineId = useParams();

  const singleImagine = useSelector((state) => state.imagine.singleImagine);
  const auth = useSelector((state) => state.auth);

  const user = auth.userid;

  function postComment(e) {
    e.preventDefault();

    console.log(newCommentInput, "calling COMMENT");

    const commentBody = {
      textcomment: newCommentInput,
    };

    dispatch(commentCreateAction(commentBody, imagineId.id));
    setNewCommentInput("");
  }

  return (
    <div className="w-full md:w-11/12 ">
      {user && (
        <form
          className="w-full  mt-3 rounded-3xl font-bold text-gray-900 bg-white border 
        border-primary flex items-center px-3 py-1"
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
      )}
      <div className="mt-2 space-y-3 mb-5">
        {singleImagine?.singleImagine?.comments?.length === 0 && (
          <div className="text-center text-gray-700 font-bold">
            No Comments till now
          </div>
        )}
        {singleImagine?.singleImagine?.comments?.map((comment) => (
          <>
            {console.log(comment, "comment")}
            <Comment
              username={comment.name}
              commentText={comment.textcomment}
              date={comment.createdAt}
              key={comment._id}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CommentList);
