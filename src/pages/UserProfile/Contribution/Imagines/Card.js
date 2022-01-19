import React, { useCallback, useEffect, useState } from "react";
import { DotsVerticalIcon, LightBulbIcon, XIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsAction } from "../../../../store/apps/auth/auth-action";
import dp from "../../../../assets/person.png";
import { Link } from "react-router-dom";
import src from "../../../../assets/reading_book.svg";
import { deleteImagineAction } from "../../../../store/apps/imagines/imagine-action";
import AlertDialogSlide from "../../../../components/Dialog";
import DelPopup from "../../../../components/DelPopup";

const Card = ({
  introImage,
  outroImage,
  id,
  author,
  name,
  title,
  appriciates,
  category,
}) => {
  /**  const [bookmark, setBookmark] = useState(false);
  // const clickBookmarkHandler = () => {
  //   setBookmark(!bookmark);
  // };*/

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const user = auth.userid;

  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const [del, setDel] = useState(false);

  const handleDelOpen = useCallback(() => {
    setDel(true);
  }, []);

  const handleDelClose = useCallback(() => {
    setDel(false);
  }, []);

  const [edit, setEdit] = useState(false);
  const clickEdit = useCallback(() => {
    user ? setEdit(true) : handleClickOpen();
  }, [user, handleClickOpen]);

  const imagineDeleteHandler = useCallback(() => {
    dispatch(deleteImagineAction(id));
  }, [dispatch, id]);

  const editClose = useCallback(() => {
    setEdit(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(userDetailsAction(author));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, author]);

  return (
    <div className="w-full md:w-96 space-x-2 flex items-start justify-center shadow">
      <Link to={`/${id}`} className="w-2/5 h-32 bg-gray-50">
        <img
          src={introImage ? introImage.secure_url : src}
          alt="pic"
          className="h-full w-full object-fill rounded-md "
        />
      </Link>
      <div className="flex flex-col w-3/5 px-2">
        <div className="flex items-start pt-3 space-x-2">
          <div className="flex flex-1">
            <img
              src={
                auth?.userDetails?.photo?.secure_url
                  ? auth?.userDetails?.photo?.secure_url
                  : dp
              }
              alt="dp"
              className="w-6 h-6 rounded-full object-cover"
            />

            <span className="text-sm ml-2 font-medium text-gray-900">
              {name}
            </span>
          </div>
          {/**<span className="cursor-pointer " onClick={clickBookmarkHandler}>
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
            </span>*/}
        </div>
        <span className=" text-gray-500 pt-2">
          <Link to={`/${id}`} className="text-sm font-medium hover:underline">
            <div className="text-base text-blackish font-semibold truncate">
              {title}
            </div>

            <div className="bg-cyan-700 w-1/2 rounded text-xs text-white flex justify-center mt-3 mb-3">
              {category}
            </div>
          </Link>
        </span>
        <span className="flex items-start space-x-4 pt-1">
          {" "}
          <span className="flex items-center space-x-1">
            <LightBulbIcon className="h-6 w-6 text-yellow-500" />
            <i className="text-gray-500 text-xs font-bold">
              {appriciates.length}
            </i>
          </span>{" "}
          <span className="space-x-1 pt-1">
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

export default Card;
