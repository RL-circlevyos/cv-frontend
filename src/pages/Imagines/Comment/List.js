import { PaperAirplaneIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  commentCreateAction,
  commentFetchAction,
} from "../../../store/apps/imagines/imagine-action";

const CommentList = ({ comments }) => {
  const [newCommentInput, setNewCommentInput] = useState();
  const dispatch = useDispatch();
  const imagineId = useParams();

  const imagine = useSelector((state) => state.imagine);

  console.log(imagine.comments);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(commentFetchAction(imagineId.id));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, imagineId]);

  function postComment(e) {
    e.preventDefault();

    console.log(newCommentInput, "calling COMMENT");

    const commentBody = {
      text: newCommentInput,
    };

    dispatch(commentCreateAction(commentBody, imagineId.id));
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
        {imagine.comments.length === 0 && (
          <div className="text-center text-gray-700 font-bold">
            No Comments till now
          </div>
        )}
        {imagine.comments.map((comment) => (
          <>
            <Comment username="helo" commentText="helo" date="12" key="1" />
          </>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CommentList);
