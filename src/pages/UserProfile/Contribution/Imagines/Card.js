import React, { useEffect, useState } from "react";
import { BookmarkIcon, LightBulbIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsAction } from "../../../../store/apps/auth/auth-action";
import dp from "../../../../assets/person.png";
import { Link } from "react-router-dom";
import src from "../../../../assets/reading_book.svg";

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
  const [bookmark, setBookmark] = useState(false);
  const clickBookmarkHandler = () => {
    setBookmark(!bookmark);
  };

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

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
          </span>
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
        </span>
      </div>
    </div>
  );
};

export default Card;
