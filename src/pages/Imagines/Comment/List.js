import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

import Mention from "./Mention";

const CommentList = () => {
  const singleImagine = useSelector((state) => state.imagine.singleImagine);
  const auth = useSelector((state) => state.auth);
  console.log(auth?.userDetails);
  const user = auth.userid;


  return (
    <div className="w-full md:w-11/12 ">
      {user && (
        /**  <form
        //   className="w-full  mt-3 rounded-3xl font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-200 border 
        // border-gray-900 dark:border-primary flex items-center px-3 py-1"
        // >
        //   <input
        //     onChange={(e) => setNewCommentInput(e.target.value)}
        //     type="text"
        //     placeholder="leave a comment"
        //     className="w-full text-sm px-3 focus:outline-none  dark:bg-gray-800"
        //   />

        //   <Button variant="text" color="primary" onClick={postComment}>
        //     <PaperAirplaneIcon className="h-5 w-5 transform rotate-45" />
        //   </Button>
        // </form>*/
        <Mention users={auth?.userDetails?.followers} />

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
