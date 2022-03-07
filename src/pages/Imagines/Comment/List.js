import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useSocket } from "../../../hooks/socketHook";
import { commentFetchAction } from "../../../store/apps/imagines/imagine-action";
import Comment from "./Comment";

import Mentions from "./Mentions";

const CommentList = () => {
  const comments = useSelector((state) => state.imagine.comments);
  const auth = useSelector((state) => state.auth);
  console.log(auth?.userDetails);
  const user = auth.userid;

  const id = useParams();
  const dispatch = useDispatch();

  const socket = useSocket();

  useEffect(() => {
    dispatch(commentFetchAction(id.id, auth.token));
    socket.on("create-comment", () => {
      dispatch(commentFetchAction(id.id, auth.token));
    });
    socket.on("delete-comment", () => {
      dispatch(commentFetchAction(id.id, auth.token));
    });
    dispatch(commentFetchAction(id.id, auth.token));
  }, [dispatch, id, socket, auth.token]);

  comments?.comments?.map((c) => console.log(c));

  return (
    <div className="w-full md:w-11/12 ">
      {auth.isLogged && (
        // <form
        //   className="w-full  mt-3 rounded-3xl font-bold text-gray-900 bg-white border
        // border-primary flex items-center px-3 py-1"
        // >
        //   <input
        //     onChange={(e) => setNewCommentInput(e.target.value)}
        //     type="text"
        //     placeholder="leave a comment"
        //     className="w-full text-sm px-3 focus:outline-none bg-white"
        //   />

        //   <Button variant="text" color="primary" onClick={postComment}>
        //     <PaperAirplaneIcon className="h-5 w-5 transform rotate-45" />
        //   </Button>
        // </form>
        <Mentions />
      )}

      <div className="mt-2 space-y-3 mb-5">
        {comments?.comments?.length === 0 && (
          <div className="text-center text-gray-700 font-bold">
            No Comments till now
          </div>
        )}
        {comments?.comments?.map((comment) => (
          <>
            <Comment
              userid={comment.user}
              username={comment.name}
              commentText={comment.textcomment}
              date={comment.createdAt}
              key={comment._id}
              commentid={comment._id}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CommentList);
