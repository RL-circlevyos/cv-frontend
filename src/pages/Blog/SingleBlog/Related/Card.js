import { BookmarkIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const src =
  "https://images.unsplash.com/photo-1638173539849-17aaa1ec80d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const Card = ({ num }) => {
  const [bookmark, setBookmark] = useState(false);
  const clickBookmarkHandler = () => {
    setBookmark(!bookmark);
  };
  return (
    <>
      <div
        class="relative h-44 w-8/12 flex items-end justify-start text-left bg-cover bg-center md:px-3 rounded-lg"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-grey-900 rounded-lg"></div>
        <div class="absolute top-0 right-0 left-0 flex justify-between items-center bg-blackish rounded-lg mx-0 ">
          <div className="flex items-center space-x-2 px-3 py-3">
            <img
              src={src}
              alt="dp"
              className="w-7 h-7 rounded-full border border-gray-300"
            />
            <span className="flex flex-col font-medium items-start  space-y-1">
              <span className="text-sm text-gray-100">
                Aindrila Bhattacharjee
              </span>
              <span className="text-xs text-gray-300">- nov 25, 2021</span>
            </span>
          </div>
          <div className="flex items-start space-x-5 pr-3">
            <span className="block text-xs">
              <span className="cursor-pointer" onClick={clickBookmarkHandler}>
                {bookmark ? (
                  <BookmarkIcon className="h-7 w-7 text-gray-200" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-300"
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
        </div>
        <main class="p-5 z-10 text-gray-50 font-Mulish">
          <Link
            to="#"
            class="text-sm tracking-wide leading-relaxed font-medium text-white hover:underline"
          >
            Dr. Abdullah Abdullah's Presidential Election Campaign {num}
          </Link>
        </main>
      </div>
    </>
  );
};

export default Card;
