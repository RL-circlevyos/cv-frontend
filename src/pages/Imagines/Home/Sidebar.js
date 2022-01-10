import React, { useCallback, useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { ChevronLeft } from "react-feather";
import {
  //BookmarkAltIcon,
  HeartIcon,
  PaperClipIcon,
} from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import Modal from "./../../../components/Modal";

const Sidebar = () => {
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);
  const user = auth.userid;

  const crImagine = useCallback(() => {
    user ? navigate("/create-general-imagine") : setOpenModal(true);
  }, [user, navigate]);

  const crStory = useCallback(() => {
    user ? navigate("/story-imagines/story-intro") : setOpenModal(true);
  }, [user, navigate]);
  return (
    <>
      <div className="md:flex relative hidden">
        <div
          className=" absolute inset-0 transform md:transform-none opacity-0 md:opacity-100 duration-200 md:relative z-50 w-64
       dark:text-sky-400 bg-gray-100 md:bg-transparent transition  text-teal-600 h-screen"
        >
          <div class="flex justify-between">
            <button class="p-2 focus:outline-none focus:bg-purple-100 hover:bg-purple-200 rounded-md md:hidden">
              <ChevronLeft />
            </button>
          </div>
          <hr className="text-gray-700 md:hidden" />

          <nav className="text-base font-semibold mt-2 space-y-2 px-4">
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-10 mt-1 rounded-2xl transition duration-200 bg-teal-800 text-white"
                    : "block py-2 px-10 mt-1 rounded-2xl transition duration-200  focus:text-white focus:bg-cyan-900   dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                }
              >
                <span className="flex items-center space-x-2">
                  <HeartIcon className="w-6 h-6 mr-2" /> General
                </span>
              </NavLink>
              <NavLink
                to={`/story-imagines`}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-10 mt-1 rounded-2xl bg-teal-800 text-white"
                    : "block py-2 px-10 mt-1 rounded-2xl transition duration-200 focus:text-white focus:bg-cyan-900   dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                }
              >
                <span className="flex items-center space-x-2">
                  <HeartIcon className="w-6 h-6 mr-2" /> Story
                </span>
              </NavLink>
              {/* <NavLink
                to={`/myview`}
                className="block py-2 px-10 mt-1 rounded-2xl transition duration-200  focus:text-white focus:bg-cyan-900   dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
              >
                <span className="flex items-center space-x-2">
                  <BookmarkAltIcon className="w-6 h-6 mr-2" /> Saved
                </span>
              </NavLink> */}
              <Link
                exact
                to="/general-imagines/myimagines"
                className="block py-2 px-10 mt-1 rounded-2xl transition duration-200  focus:text-white focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
              >
                <span className="flex items-center space-x-2">
                  <PaperClipIcon className="w-6 h-6 mr-2" /> My Imagines
                </span>
              </Link>
              <div className="pt-4">
                <button
                  onClick={crImagine}
                  to="/create-general-imagine"
                  className="block py-2 px-10 w-full font-bold mt-1 rounded-2xl transition duration-200 bg-primary 
                  text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                >
                  <div className=" text-center">Create Imagine</div>
                </button>
              </div>
              <div className="pt-4">
                <button
                  onClick={crStory}
                  className="block py-2 px-10 w-full font-bold mt-1 rounded-2xl transition duration-200 bg-primary 
                  text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                >
                  <div className=" text-center">Create Story</div>
                </button>
              </div>
            </>
          </nav>
        </div>
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
      </div>
    </>
  );
};

export default React.memo(Sidebar);
