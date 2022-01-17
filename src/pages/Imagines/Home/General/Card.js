import React, { useCallback, useEffect, useState } from "react";
import {
  BookmarkIcon,
  DotsVerticalIcon,
  LightBulbIcon,
  XIcon,
} from "@heroicons/react/solid";
import Sound from "../Sound";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  appriciateAction,
  deleteImagineAction,
  saveImagineAction,
} from "../../../../store/apps/imagines/imagine-action";
import dp from "../../../../assets/person.png";
import AlertDialogSlide from "../../../../components/Dialog";
import DelPopup from "./../../../../components/DelPopup";
import { userDetailsAction } from "../../../../store/apps/auth/auth-action";
import just_saying from "../../../../assets/reading_book.svg";

const Card = ({
  title,
  introImage,
  username,
  author,
  content,
  id,
  avatar,
  appriciates,
  category,
  isAppriciatesAuthor,
  audiovoice,
}) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const user = auth.userid;

  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const [bookmark, setBookmark] = useState(false);
  const clickBookmarkHandler = useCallback(() => {
    dispatch(saveImagineAction(id));
  }, [dispatch, id]);

  const [like, setLike] = useState(false);

  const [del, setDel] = useState(false);

  const handleDelOpen = useCallback(() => {
    setDel(true);
  }, []);

  const handleDelClose = useCallback(() => {
    setDel(false);
  }, []);
  const clickLikeHandler = useCallback(() => {
    dispatch(appriciateAction(id));
  }, [dispatch, id]);
  const imagineDeleteHandler = useCallback(() => {
    dispatch(deleteImagineAction(id));
  }, [dispatch, id]);

  const [edit, setEdit] = useState(false);
  const clickEdit = useCallback(() => {
    user ? setEdit(true) : handleClickOpen();
  }, [user, handleClickOpen]);

  const editClose = useCallback(() => {
    setEdit(false);
  }, []);

  return (
    <div className="w-full space-x-2 flex items-start justify-center rounded-lg shadow mb-3">
      <div className="w-2/5 h-40 bg-gray-50">
        <div className="text-sm font-medium hover:underline h-36">
          <Link to={`/${id}`}>
            <img
              src={!introImage ? just_saying : introImage.secure_url}
              alt="pic"
              className="h-40 w-full object-fit rounded-md "
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-1 w-3/5 py-1">
        <div className="flex items-start pt-3 space-x-2 px-1.5">
          <div className="flex flex-1 w-full">
            <Link to={`/profile/${author}`}>
              {" "}
              <img
                src={avatar ? avatar : dp}
                alt="dp"
                className="w-10 xs:w-7 h-7 rounded-full object-cover border border-gray-300"
              />
            </Link>

            <span className="text-sm ml-2 font-medium text-gray-600 truncate">
              {username}
            </span>
          </div>
        </div>
        <span className=" text-gray-500 ml-2">
          <Link to={`/${id}`} className="text-sm font-medium hover:underline">
            <div className="text-base text-blackish font-semibold truncate">
              {title}
            </div>

            <div className="bg-cyan-700 w-1/2 rounded text-xs text-white flex justify-center mt-4 mb-2">
              {category}
            </div>
          </Link>
        </span>
        <span className="flex items-start justify-around bottom-0 sticky space-x-4 pt-1">
          <span>{audiovoice && <Sound audiovoice={audiovoice} />}</span>
          <span className="flex items-center text-xs ">
            <span className="cursor-pointer" onClick={clickLikeHandler}>
              <LightBulbIcon className="h-6 w-6 md:h-7 md:w-7 text-yellow-400" />
            </span>
            <b>{appriciates.length}</b>
          </span>
          {/* <span className="cursor-pointer " onClick={clickBookmarkHandler}>
            {bookmark ? (
              <BookmarkIcon className="h-6 w-6 text-blue-800 pt-1" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mt-1 text-blue-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            )}
          </span>{" "} */}
          <span className="flex items-center space-x-1 pt-1">
            {!edit && author === auth.userid && (
              <>
                {/* {userid === auth.userid && ( */}
                <span>
                  <DotsVerticalIcon
                    className="h-5 w-5 cursor-pointer"
                    onClick={clickEdit}
                  />
                </span>
                {/* )} */}
              </>
            )}
            {edit && (
              <div className="relative inline-block text-left font-Mulish">
                <div
                  className="origin-center absolute z-50 font-Mulish right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black 
        ring-opacity-5 divide-y divide-gray-100 focus:outline-none text-base"
                >
                  <span className="flex justify-end items-center mx-1 my-1">
                    <span
                      onClick={editClose}
                      className="cursor-pointer font-bold"
                    >
                      <XIcon className="h-5 w-5 text-pink-500" />
                    </span>
                  </span>
                  {/* <div className="py-1">
                    <div>
                      <Link
                        to={`/${id}/update`}
                        className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
                      >
                        Edit
                      </Link>
                    </div>
                  </div> */}
                  <div className="py-1">
                    <div
                      className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
                      onClick={handleDelOpen}
                    >
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            )}
          </span>
          <AlertDialogSlide
            open={open}
            handleClose={handleClose}
            title="Login to Circlevyos"
            content="To get your own access on different contents you should signin first"
            link="/login"
            show={true}
          />
          <DelPopup
            open={del}
            handleClose={handleDelClose}
            title="Delete"
            content="Are you sure you want to delete the post"
            onClick={imagineDeleteHandler}
            show={true}
          />
        </span>
      </div>
    </div>
  );
};

export default React.memo(Card);
