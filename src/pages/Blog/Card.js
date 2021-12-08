import { BookmarkIcon, LightBulbIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const src =
  "https://images.unsplash.com/photo-1637580981035-ddfe9a4ace7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60";

const Card = ({ num }) => {
  const [like, setLike] = useState(false);
  const clickLikeHandler = () => {
    setLike(!like);
  };

  const [bookmark, setBookmark] = useState(false);
  const clickBookmarkHandler = () => {
    setBookmark(!bookmark);
  };
  return (
    <>
      <div
        class="relative h-52 w-full flex items-end justify-start text-left bg-cover bg-center md:px-3 rounded-lg"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div class="absolute top-0 mt-16 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 rounded-lg"></div>
        {/* <div class="absolute top-0 right-0 left-0 flex justify-between items-center bg-glass  rounded-lg mx-2">
          <div className="flex items-center space-x-2 px-3 py-3">
            <img src={src} alt="dp" className="w-11 h-11 rounded-full" />
            <span className="flex flex-col font-medium items-start  space-y-1 px-2">
              <span className="text-md text-black font-semibold">
                Aindrila Bhattacharjee
              </span>
              <span className="text-sm text-gray-700"> nov 25, 2021</span>
            </span>
          </div>
          <div className="flex items-start space-x-5 pr-3">
            <span className="block space-y-1 text-xs">
              <span className="cursor-pointer" onClick={clickLikeHandler}>
                {like ? (
                  <LightBulbIcon className="h-7 w-7 text-yellow-500" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-yellow-600"
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
              <i>12k</i>
            </span>
            <span className="block text-xs">
              <span className="cursor-pointer" onClick={clickBookmarkHandler}>
                {bookmark ? (
                  <BookmarkIcon className="h-7 w-7 text-blue-800" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-800"
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
            </span>
          </div>
        </div> */}
        <main class="p-5 z-10 text-gray-50">
          <Link
            to="#"
            class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
          >
            Dr. Abdullah Abdullah's Presidential Election Campaign {num}
          </Link>
        </main>
      </div>
    </>
  );
};

export default Card;
