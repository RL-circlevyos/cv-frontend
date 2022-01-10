import React, { useCallback, useState } from "react";
import {
  BookmarkIcon,
  DotsVerticalIcon,
  EyeIcon,
  LightBulbIcon,
  XIcon,
} from "@heroicons/react/solid";
import Sound from "../Sound";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "./../../../../components/Modal";

const src =
  "https://images.unsplash.com/photo-1638208561774-6e02a8e17cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const Card = ({ title, introImage, username, author, content, id }) => {
  const auth = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);
  const user = auth.userid;

  const [bookmark, setBookmark] = useState(false);
  const clickBookmarkHandler = useCallback(() => {
    user ? setBookmark(!bookmark) : setOpenModal(true);
  }, [user, bookmark]);

  const [like, setLike] = useState(false);
  const clickLikeHandler = useCallback(() => {
    user ? setLike(!like) : setOpenModal(true);
  }, [like, user]);

  const [edit, setEdit] = useState(false);
  const clickEdit = useCallback(() => {
    user ? setEdit(true) : setOpenModal(true);
  }, [user]);

  const editClose = () => {
    setEdit(false);
  };
  return (
    <div className="w-full space-x-2 flex items-start justify-center shadow mb-3">
      <div className="w-2/5 h-32 bg-gray-50">
        <div className="text-sm font-medium hover:underline">
          <Link to={`/story-imagines/${id}`}>
            <img
              src={
                !introImage
                  ? src
                  : `https://storage.googleapis.com/niketan-dev-mode.appspot.com/${introImage}`
              }
              alt="pic"
              className="h-full w-full object-contain rounded-md "
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-2 w-3/5 py-1.5">
        <div className="flex items-start pt-3 space-x-2 px-1.5">
          <Link
            to={`/contribution/profile-imagines/${author}`}
            className="flex flex-1 hover:underline"
          >
            <img
              src="https://images.unsplash.com/photo-1637867165026-5725fe9fb052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="dp"
              className="w-6 h-6 rounded-full object-cover"
            />

            <span className="text-md ml-2 font-medium text-gray-900">
              {username}
            </span>
          </Link>
        </div>
        <span className=" text-gray-500">
          <Link
            to={`/story-imagines/${id}`}
            className="text-sm font-medium hover:underline"
          >
            <div>{title}</div>
            <div className="truncate">{content}</div>
          </Link>
        </span>
        <span className="flex items-start justify-around bottom-0 sticky space-x-4 pt-1">
          <span>
            <Sound />
          </span>
          <span className="flex items-center text-xs ">
            <span className="cursor-pointer" onClick={clickLikeHandler}>
              {like ? (
                <LightBulbIcon className="h-6 w-6 md:h-7 md:w-7 text-yellow-400" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-7 md:w-7 text-yellow-600"
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
            <b>12</b>
          </span>
          <span className="cursor-pointer " onClick={clickBookmarkHandler}>
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
          </span>{" "}
          <span className="flex items-center space-x-1 pt-1">
            {!edit && (
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
              <div className="relative">
                {/* {userid === auth.userid && ( */}
                <div className="w-20 py-1 text-tiny z-50 bg-white shadow text-gray-600 font-Mulish">
                  <span className="flex justify-between items-center">
                    <span></span>
                    <span
                      onClick={editClose}
                      className="cursor-pointer font-bold"
                    >
                      <XIcon className="h-4 w-4 text-pink-500" />
                    </span>
                  </span>
                  <div className="px-2 hover:bg-primary hover:text-white cursor-pointer">
                    Edit
                  </div>
                  <div className="px-2 mt-1 hover:bg-primary hover:text-white cursor-pointer">
                    Delete
                  </div>
                </div>
                {/* )} */}
              </div>
            )}
          </span>
          {openModal && (
            <Modal
              title="Alert"
              link="/login"
              content="first you have to login to access the content"
              closeModal={() => {
                setOpenModal(false);
              }}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default React.memo(Card);
