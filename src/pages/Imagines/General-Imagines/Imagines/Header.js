import React, { useCallback, useState } from "react";

import { useSelector } from "react-redux";
import moment from "moment";
import dp from "../../../../assets/person.png";
import { useNavigate } from "react-router-dom";
import AlertDialogSlide from "./../../../../components/Dialog";
import CardUtilityThreeDots from "../../../../components/CardUtilityThreeDots";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const user = auth.userid;
  const [open, setOpen] = useState(false);
  const imagine = useSelector((state) => state.imagine);

  const author = imagine?.singleImagine?.singleImagine?.user?._id;
  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const navigate = useNavigate();
  const profileHandler = useCallback(() => {
    user ? navigate(`/profile/${author}`) : handleClickOpen();
  }, [navigate, author, user, handleClickOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  /**  const [bookmark, setBookmark] = useState(false);*/
  const singleImagine = useSelector((state) => state.imagine.singleImagine);
  /**const clickBookmarkHandler = useCallback(() => {
    user ? setBookmark(!bookmark) : handleClickOpen();
  }, [bookmark, handleClickOpen, user]);*/

  /**const [follow, setFollow] = useState(false);
const clickFollowHandler = useCallback(() => {
    user ? setFollow(!follow) : handleClickOpen();
  }, [follow, handleClickOpen, user]);*/
  // console.log(singleImagine.singleImagine.user._id);
  return (
    <>
      <CardUtilityThreeDots
        author={singleImagine?.singleImagine?.user?._id}
        imagineId={singleImagine?.singleImagine?._id}
        singlePage={true}
      />
      <div className=" flex justify-between items-center px-3 font-Mulish">
        <div className="flex items-center w-full space-x-2">
          <div onClick={profileHandler} className="cursor-pointer ">
            <img
              src={
                imagine?.singleImagine?.singleImagine?.user?.photo
                  ? imagine?.singleImagine?.singleImagine?.user?.photo
                      ?.secure_url
                  : dp
              }
              alt="dp"
              className="w-10 h-10 rounded-full object-cover border border-gray-300"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-gray-900">
                {imagine?.singleImagine?.singleImagine?.user?.name}
              </span>
              {/** {imagine?.singleImagine?.singleImagine?.user?.email} */}

              {/* <span className="cursor-pointer" onClick={clickFollowHandler}>
                {follow ? (
                  <span className="bg-sky-600 text-gray-100 px-1 py-1 font-medium text-tiny cursor-pointer">
                    Following
                  </span>
                ) : (
                  <span className="text-sky-500 text-tiny cursor-pointer">
                    Follow
                  </span>
                )}
              </span> */}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {moment(singleImagine?.singleImagine?.createdAt).format(
                "dddd, MMMM Do YYYY, h:mm a"
              )}
            </div>
          </div>
        </div>

        <div className="w-full hidden lg:flex justify-between items-center">
          <div></div>
          <div className="w-full max-w-sm">
            {imagine.singleImagine?.singleImagine?.audiovoice && (
              <audio
                src={
                  imagine.singleImagine?.singleImagine?.audiovoice?.secure_url
                }
                controls
                controlsList="nodownload"
              />
            )}
          </div>
        </div>

        {/* <div className="flex items-start space-x-5 text-gray-400">
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
        </div> */}
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
