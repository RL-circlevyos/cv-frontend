import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { ChevronLeft, ChevronsRight } from "react-feather";
import {
  BookmarkAltIcon,
  ClipboardListIcon,
  FireIcon,
  LightningBoltIcon,
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
  const isJoined = true;
  /**  let isJoinedtoEnv = useSelector((state) => state.env.isJoinToEnv);
  const envid = useSelector((state) => state.env.envid);
  const dispatch = useDispatch();
  const history = useHistory();

  const leaveEnvHandler = (event) => {
    event.preventDefault();
    dispatch(envSliceAction.leaveFromEnv());
    history.push("/");
    handleClose();
  };

  console.log("test side bar calling");*/
  return (
    <>
      <div className="md:flex">
        <div
          className={`${
            open
              ? "translate-x-0 ease-in opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }
      absolute inset-0 transform md:transform-none md:opacity-100 duration-200 md:relative z-10 w-64
       dark:text-sky-400 bg-gray-100 md:bg-transparent transition dark:bg-gray-800  text-teal-600 h-screen p-3`}
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

          <nav className="text-base font-semibold mt-2 space-y-2">
            {isJoined && (
              <>
                <NavLink
                  onClick={handleClose}
                  exact
                  to="/frequents"
                  className="block py-2.5 px-4 mt-1 rounded transition duration-200  focus:text-white focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                >
                  <span className="flex items-center space-x-2">
                    <PaperClipIcon className="w-6 h-6 mr-2" /> General
                  </span>
                </NavLink>
                <NavLink
                  onClick={handleClose}
                  to={`/myview`}
                  className="block py-2.5 px-4 mt-1 rounded transition duration-200  focus:text-white focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                >
                  <span className="flex items-center space-x-2">
                    <BookmarkAltIcon className="w-6 h-6 mr-2" /> Pinned
                  </span>
                </NavLink>
                <div className="space-y-5">
                  {" "}
                  <NavLink
                    onClick={handleClose}
                    to="/"
                    className="flex items-center py-2.5 px-4 mt-10  gap-2  ml-6 mr-6 rounded-3xl transition duration-200 bg-primary text-gray-100
                     focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                  >
                    <ClipboardListIcon className="h-6 w-6" /> Create Blog
                  </NavLink>
                  <NavLink
                    onClick={handleClose}
                    to="/"
                    className="flex items-center py-2.5 gap-2 px-4 mt-1 ml-6 mr-6 rounded-3xl transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                  >
                    <LightningBoltIcon className="h-6 w-6" /> Create Imagine
                  </NavLink>
                </div>
                <div>
                  {" "}
                  <NavLink
                    onClick={handleClose}
                    to="/"
                    className="flex items-center py-2.5 gap-2 px-4  ml-6 mr-8 mt-16 rounded transition duration-200 text-gray-100  bg-blue-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                  >
                    <FireIcon className="h-6 w-6" /> Premium
                  </NavLink>
                </div>
              </>
            )}
          </nav>
        </div>

        <button
          class="p-2 focus:outline-none focus:bg-gray-100 bg-gray-400 rounded-md md:hidden"
          onClick={handleClickOpen}
        >
          <ChevronsRight />
        </button>
      </div>
    </>
  );
};

export default React.memo(Sidebar);
