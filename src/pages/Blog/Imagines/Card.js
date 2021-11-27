import React, { useState } from "react";
import { BookmarkIcon, LightBulbIcon } from "@heroicons/react/solid";

const src =
  "https://images.unsplash.com/photo-1637580981035-ddfe9a4ace7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60";
const Card = () => {
  const [bookmark, setBookmark] = useState(false);
  const clickBookmarkHandler = () => {
    setBookmark(!bookmark);
  };
  return (
    <div class="flex gap-3 h-36 bg-grey-100 shadow-md">
      <div class="flex w-1/2">
        <img src={src} alt="pic" className="w-full h-full object-cover" />
      </div>
      <div>
        <div class="flex flex-col w-full">
          <span className="flex justify-between items-center px-1 py-2 w-full ">
            <span className="flex items-center space-x-1 text-xs  text-gray-900 font-semibold">
              <img src={src} alt="pic" className="w-6 h-6 rounded-full" />
              <span>Aindrila Bhattacharjee</span>
            </span>
            <span>
              {" "}
              <span className="cursor-pointer" onClick={clickBookmarkHandler}>
                {bookmark ? (
                  <BookmarkIcon className="h-5 w-5 text-blue-800" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-800"
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
          </span>
        </div>
        <div class=" ">
          <main class=" text-gray-500">
            <span class="text-xs tracking-tight font-medium leading-1 font-regular text-white hover:underline">
              Dr. Abdullah Abdullah's Presidential Election Campaign
            </span>
          </main>
          <span className="flex items-center text-xs pt-2">
            {" "}
            <LightBulbIcon className="h-7 w-7 text-yellow-500" />
            <i className="text-gray-600 font-bold">12k</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
