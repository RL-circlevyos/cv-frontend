import { PaperAirplaneIcon } from "@heroicons/react/solid";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  commentCreateAction,
  commentFetchAction,
} from "../../../../store/apps/blogs/blog-action";
import Comment from "./Comment";
import Button from "@mui/material/Button";

const CommentList = () => {
  const blog = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [newCommentInput, setNewCommentInput] = useState();
  const blogid = useParams();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     dispatch(commentFetchAction(blogid.blogid));
  //   }, 500);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [dispatch, blogid]);

  function postComment(e) {
    e.preventDefault();

    console.log("calling COMMENT");
    const newComment = {
      text: newCommentInput,
    };

    dispatch(commentCreateAction(blogid.blogid, newComment));
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {

  //   }, 500);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [dispatch, blogid.blogid]);
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
        {blog?.comments?.length === 0 && (
          <div className="text-center text-gray-700 font-bold">
            No Comments till now
          </div>
        )}
        {blog?.comments?.map((comment) => (
          <>
            {console.log(comment)}
            <Comment
              username={comment.user.name}
              commentText={comment.text}
              date={comment.id}
              key={comment.id}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CommentList);
