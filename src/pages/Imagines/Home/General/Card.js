import React, { useCallback, useEffect, useState } from "react";
import {
  AnnotationIcon,
  DotsHorizontalIcon,
  LightBulbIcon,
  XIcon,
} from "@heroicons/react/solid";
import Sound from "../Sound";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  appriciateAction,
  deleteImagineAction,
} from "../../../../store/apps/imagines/imagine-action";
import dp from "../../../../assets/person.png";
import AlertDialogSlide from "../../../../components/Dialog";
import DelPopup from "./../../../../components/DelPopup";

import just_saying from "../../../../assets/reading_book.svg";
import moment from "moment";

import { ShareIcon } from "@heroicons/react/outline";
import ShareDialog from "./../../General-Imagines/Imagines/ShareDialog";
import TextareaDialog from "../../../../components/Feedback/TextareaDialog";

const Card = ({
  title,
  introImage,
  username,
  author,
  date,
  width,
  comments,
  id,
  avatar,
  appriciates,
  category,

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
  /**const [bookmark, setBookmark] = useState(false);
  const clickBookmarkHandler = useCallback(() => {
    dispatch(saveImagineAction(id));
  }, [dispatch, id]);

  const [like, setLike] = useState(false);*/

  const [del, setDel] = useState(false);

  const handleDelOpen = useCallback(() => {
    setDel(true);
  }, []);

  const handleDelClose = useCallback(() => {
    setDel(false);
  }, []);

  /******* report states *****/
  const [report, setReport] = useState(false);
  const handleReportOpen = useCallback(() => {
    setReport(true);
  }, []);
  const handleReportClose = useCallback(() => {
    setReport(false);
    setEdit(false);
  }, []);
  const [textareaValue, setTextareaValue] = useState("");
  const submitTextareaValue = () => {
    const reportContent = {
      report: textareaValue,
    };
    console.log(reportContent);
    setTextareaValue("");
    setReport(false);
    setEdit(false);
  };
  /******* report states end*****/

  const editClose = useCallback(() => {
    setEdit(false);
  }, []);

  const navigate = useNavigate();
  const profileHandler = useCallback(() => {
    user ? navigate(`/profile/${author}`) : handleClickOpen();
  }, [navigate, author, user, handleClickOpen]);

  const appreciate = useCallback(() => {
    dispatch(appriciateAction(id));
  }, [dispatch, id]);

  const clickLikeHandler = useCallback(() => {
    user ? appreciate() : handleClickOpen();
  }, [appreciate, user, handleClickOpen]);

  const imagineDeleteHandler = useCallback(() => {
    dispatch(deleteImagineAction(id));
    handleDelClose();
    editClose();
  }, [dispatch, id, handleDelClose, editClose]);

  const [edit, setEdit] = useState(false);
  const clickEdit = useCallback(() => {
    user ? setEdit(true) : handleClickOpen();
  }, [user, handleClickOpen]);

  const [openShare, setOpenShare] = useState(false);

  const handleClickOpenShare = useCallback(() => {
    setOpenShare(true);
  }, []);

  const handleCloseShare = useCallback(() => {
    setOpenShare(false);
  }, []);
  console.log(avatar, "profile pic");

  return (
    <div
      className={`${width} space-x-2 flex items-start justify-start rounded-lg shadow mb-3 border border-gray-100`}
    >
      <div className="w-2/5 h-full ">
        <div className="text-sm font-medium hover:underline">
          <Link className="h-48" to={`/${id}`}>
            <img
              src={!introImage ? just_saying : introImage.secure_url}
              alt="pic"
              className="h-48 w-full object-fill rounded-md "
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-1 w-3/5 py-1">
        {/*********************** three dots start ******************/}

        <span className="flex items-center justify-end pr-4 space-x-1">
          <>
            {/* {userid === auth.userid && ( */}
            <span>
              <DotsHorizontalIcon
                className="h-5 w-5 cursor-pointer"
                onClick={clickEdit}
              />
            </span>
            {/* )} */}
          </>
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
                {author !== auth.userid && (
                  <div className="py-1">
                    <div
                      onClick={handleReportOpen}
                      className="bg-gray-50 text-pink-500 hover:bg-gray-200  block px-4 py-2 font-bold"
                    >
                      Report
                    </div>
                  </div>
                )}
                {author === auth.userid && (
                  <div className="py-1">
                    <div
                      className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
                      onClick={handleDelOpen}
                    >
                      Delete
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </span>
        {/*********************** three dots end ******************/}
        <div className="flex items-start space-x-2 px-1.5">
          <div className="flex flex-1 w-full">
            <div onClick={profileHandler}>
              {" "}
              <img
                src={avatar ? avatar : dp}
                alt="dp"
                className="w-10 xs:w-7 h-7 rounded-full object-cover border border-gray-300 cursor-pointer"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-sm ml-2 font-bold  text-gray-500 truncate">
                {username}
              </span>
              <div className="text-xxs md:text-xs text-gray-500 mt-1 ml-2">
                {moment(date).format(" MMMM Do YYYY, h:mm a")}
              </div>
            </div>
          </div>
        </div>
        <span className=" text-gray-500 ml-3 pt-2">
          <Link to={`/${id}`} className="text-sm font-medium hover:underline">
            <div className="text-base text-blackish font-semibold truncate">
              {title}
            </div>

            <div className="bg-cyan-700 w-1/2 rounded text-xs text-white flex justify-center mt-4 mb-2">
              {category}
            </div>
          </Link>
        </span>
        <span className="flex items-start justify-center bottom-0 sticky space-x-3 w-full lg:space-x-4 md:ml-3 pt-1">
          <span>{audiovoice && <Sound audiovoice={audiovoice} />}</span>
          <span className="flex items-center text-xs ">
            <span className="cursor-pointer" onClick={clickLikeHandler}>
              {appriciates.includes(auth.userid) ? (
                <LightBulbIcon className="h-6 w-6 md:h-7 md:w-7 text-yellow-400" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-7 md:w-7 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              )}
            </span>
            <b className="italic">{appriciates.length}</b>
          </span>
          <span className="flex justify-center items-start flex-col text-xxs lg:text-tiny text-gray-300 lg:mt-1">
            <span className="flex items-center space-x-1 text-xs ">
              <span className="">
                <AnnotationIcon className="h-5 w-5 text-gray-500" />
              </span>
              <span className="text-xs lg:text-sm italic ml-1 text-gray-700">
                <i>{comments.length}</i>
              </span>
            </span>
          </span>
          <span className="lg:pt-1" onClick={handleClickOpenShare}>
            <ShareIcon className="h-6 w-6 cursor-pointer text-gray-600 pb-1 ml-2" />
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
          <TextareaDialog
            open={report}
            handleClose={handleReportClose}
            title="Report about the content"
            content={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            onClick={submitTextareaValue}
            show={true}
            color="#e30b5d"
          />
          <ShareDialog
            open={openShare}
            handleClose={handleCloseShare}
            title="Share this link"
            content={`https://61f9942b41f3bd0007d1fcf1--focused-almeida-cad4a1.netlify.app/${id}`}
          />
        </span>
      </div>
    </div>
  );
};

export default React.memo(Card);
