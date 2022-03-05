import React, { useCallback, useState } from "react";
import moment from "moment";
import dp from "../../../assets/person.png";
import { TrashIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import DelPopup from "../../../components/DelPopup";
import { commentDeleteAction } from "../../../store/apps/imagines/imagine-action";
import { useParams } from "react-router-dom";

const Comment = ({
  username,
  commentText,
  avatar,
  date,
  userid,
  commentid,
}) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = auth.userid;
  console.log(user);

  const [del, setDel] = useState(false);

  const handleDelOpen = useCallback(() => {
    setDel(true);
  }, []);
  const handleDelClose = useCallback(() => {
    setDel(false);
  }, []);
  const imagineCommentDeleteHandler = useCallback(() => {
    dispatch(commentDeleteAction(id, commentid, auth.token));
    handleDelClose();
  }, [handleDelClose]);
  /**const mentionRegex = /\b(@)\b/g;*/
  return (
    <div className="flex flex-col items-start space-x-2 pb-2 px-4 py-1 shadow border border-gray-50 font-Mulish mb-2 w-full">
      <div className="flex-wrap w-full">
        <div className="flex justify-between items-start w-full">
          <div className="flex items-start space-x-2 w-full">
            <img
              src={avatar ? avatar : dp}
              alt="dp"
              className="w-6 h-6 rounded-full object-cover"
            />{" "}
            <div className="flex flex-col w-full">
              <span className="text-tiny font-semibold text-gray-900">
                {username}
              </span>

              <div className="text-xxs text-gray-500">
                {moment(date).format("dddd, MMMM Do YYYY, h:mm a")}
              </div>
            </div>
            <div>
              {auth.userDetails._id === userid ? (
                <TrashIcon
                  className="h-4 w-4 text-pink-500 cursor-pointer"
                  onClick={handleDelOpen}
                />
              ) : null}
            </div>
          </div>
        </div>
        <span className="text-gray-800 text-tiny lg:text-base cursor-pointer">
          {commentText}
        </span>
      </div>
      <DelPopup
        open={del}
        handleClose={handleDelClose}
        title="Delete"
        content="Are you sure you want to delete this comment"
        onClick={imagineCommentDeleteHandler}
        show={true}
      />
    </div>
  );
};

export default React.memo(Comment);
