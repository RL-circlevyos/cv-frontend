import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { ChevronLeft, ChevronsRight } from "react-feather";
import {
  BookmarkAltIcon,
  FireIcon,
  PaperClipIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  /**   const newEnv = useSelector((state) => state.env.newEnv);*/
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="md:flex relative hidden">
        <div
          className=" absolute inset-0 transform md:transform-none opacity-0 md:opacity-100 duration-200 md:relative z-50 w-64
       dark:text-sky-400 bg-gray-100 md:bg-transparent transition  text-teal-600 h-screen"
        >
          <div class="flex justify-between">
            <button
              class="p-2 focus:outline-none focus:bg-purple-100 hover:bg-purple-200 rounded-md md:hidden"
              onClick={handleClose}
            >
              <ChevronLeft />
            </button>
          </div>
          <hr className="text-gray-700 md:hidden" />

          <nav className="text-base font-semibold mt-2 space-y-2 px-4">
            <>
              <NavLink
                onClick={handleClose}
                exact
                to="/frequents"
                className="block py-2 px-10 mt-1 rounded-2xl transition duration-200  focus:text-white focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
              >
                <span className="flex items-center space-x-2">
                  <PaperClipIcon className="w-6 h-6 mr-2" /> General
                </span>
              </NavLink>
              <NavLink
                onClick={handleClose}
                to={`/myview`}
                className="block py-2 px-10 mt-1 rounded-2xl transition duration-200  focus:text-white focus:bg-cyan-900   dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
              >
                <span className="flex items-center space-x-2">
                  <BookmarkAltIcon className="w-6 h-6 mr-2" /> Saved
                </span>
              </NavLink>

              <div className="mt-4">
                <Link
                  onClick={handleClose}
                  to="/create-general-imagine"
                  className="block py-2 px-10 mt-1  rounded-2xl transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                >
                  <div className=" text-center">Create Imagine</div>
                </Link>
              </div>
            </>
          </nav>
        </div>
      </div>
    </>
  );
};

export default React.memo(Sidebar);
