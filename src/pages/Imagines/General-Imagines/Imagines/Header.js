import React, { useCallback, useState } from "react";
import { BookmarkIcon } from "@heroicons/react/solid";

import { Link } from "react-router-dom";
import AlertDialogSlide from "./../../../../components/Dialog";
import { useSelector } from "react-redux";

const Header = ({ author }) => {
  const auth = useSelector((state) => state.auth);
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
    user ? setBookmark(!bookmark) : handleClickOpen();
  }, [bookmark, handleClickOpen, user]);

  const [follow, setFollow] = useState(false);
  const clickFollowHandler = useCallback(() => {
    user ? setFollow(!follow) : handleClickOpen();
  }, [follow, handleClickOpen, user]);
  return (
    <>
      <div className=" flex justify-between items-center px-3 font-Mulish">
        <div className="flex items-center space-x-2">
          <Link to={`/contribution/profile-imagines/${author}`}>
            <img
              src="https://images.unsplash.com/photo-1637867165026-5725fe9fb052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="dp"
              className="w-10 h-10 rounded-full object-cover"
            />
          </Link>
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-gray-900">User Name</span>

              <span className="cursor-pointer" onClick={clickFollowHandler}>
                {follow ? (
                  <span className="bg-sky-600 text-gray-100 px-1 py-1 font-medium text-tiny cursor-pointer">
                    Following
                  </span>
                ) : (
                  <span className="text-sky-500 text-tiny cursor-pointer">
                    Follow
                  </span>
                )}
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Published 23 Nov, 2021.
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-5 text-gray-400">
          <span className="cursor-pointer" onClick={clickBookmarkHandler}>
            {bookmark ? (
              <BookmarkIcon className="h-6 w-6 text-primary" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
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
          </span>
          <span className=""></span>
        </div>
      </div>
      <AlertDialogSlide
        open={open}
        handleClose={handleClose}
        title="Login to Circlevyos"
        content="To get your own access on different contents you should signin first"
        link="/login"
        show={true}
      />
    </>
  );
};

export default React.memo(Header);
